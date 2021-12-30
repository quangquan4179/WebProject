import { makeObservable, observable } from "mobx";
import { postComment } from "../services/CommentService";
import { getPostByUserId } from "../services/PostService";
import { PostInterface } from "../shared/interfaces";
class ProfileStore{
    myPosts:PostInterface[]=[];
    constructor(){
        makeObservable(this,{
            myPosts:observable
        })
    }

    setMypost(arr:PostInterface[]){
        this.myPosts=arr
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

    

}
export default new ProfileStore();