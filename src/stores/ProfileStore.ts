import { makeObservable, observable } from "mobx";
import { postComment } from "../services/CommentService";
import { getFollow, getFollowed } from "../services/FollowService";
import { getPostByUserId } from "../services/PostService";
import { PostInterface, User } from "../shared/interfaces";
class ProfileStore{
    follow: User[]=[];
    followed: User[]=[];
    myPosts:PostInterface[]=[];
    constructor(){
        makeObservable(this,{
            myPosts:observable,
            follow:observable,
            followed:observable
        })
    }

    setMypost(arr:PostInterface[]){
        this.myPosts=arr
    }
    setFollow(arr: User[]){
        this.follow=arr
    }    
    setFollowed(arr: User[]){
        this.followed=arr
    }

    async getAllMyPosts(user_id:number){
        const res =  await  getPostByUserId(user_id);

        const posts:PostInterface[] =[...res.data];
        this.setMypost(posts);
    }
    async postComment(comment: string, post_id: number){
        const res = await postComment(post_id,comment);
        const posts:PostInterface[]=[...this.myPosts];
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        posts[index].comments.push(res.data);
        this.setMypost(posts);
        
    }
    async getFollow(userId:number){
        const res = await getFollow(userId);
        if(res.success){
            this.setFollow(res.data);
        }
    }
    async getFollowed(userId:number){
        const res = await getFollowed(userId)
        if(res.success){
            this.setFollowed(res.data);
        }
    }

    

}
export default new ProfileStore();