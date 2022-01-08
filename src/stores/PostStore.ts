import { makeObservable, observable } from "mobx";
import { getAllPost, createPost, deletePost } from "../services/PostService";
import { postComment } from "../services/CommentService";
import { PostInterface, Comment, Like } from "../shared/interfaces";
import { timestamp } from "../shared/functions/convertTime";
import { deleteLike, postLike } from "../services/LikeService";
class PostStore{
    posts:PostInterface[]=[];
    constructor(){
        makeObservable(this,{
            posts:observable,

        })
    }
    setPosts(arrayPosts: PostInterface[]){
        this.posts=arrayPosts
    }

    async getAllPost(){
        const res = await getAllPost();
        const posts:PostInterface[]=[...res.data];
        posts.sort((a:PostInterface,b:PostInterface)=>{
            return (timestamp(a.create_at)>timestamp(b.create_at))?1:-1
        })
        this.setPosts(posts);
    }
    
    async createPost(content: string, photoURL: any){
        const res = await createPost(content, photoURL);
        const newpost:PostInterface[]=[...this.posts];
        newpost.unshift(res.data);
        this.setPosts(newpost)


    }
    async realtimePost(data:PostInterface){
         const posts:PostInterface[]=[...this.posts];
         posts.unshift(data);
         this.setPosts(posts);

    }
    async realtimeComment(data:Comment ){
        const post_id = data.post_id;
        const posts:PostInterface[]=[...this.posts]; 
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        const indexComment=posts[index].comments.findIndex((comment:Comment)=>data.id===comment.id);
        if(indexComment===-1){
            posts[index].comments.push(data);
        }

        this.setPosts(posts);


    }
    async realtimeLike(data:Like ){
        const post_id = data.post_id;
        const posts:PostInterface[]=[...this.posts]; 
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        const indexComment=posts[index].likes.findIndex((like:Like)=>data.id===like.id);
        if(indexComment===-1){
            posts[index].likes.push(data);
        }
        this.setPosts(posts);
    }
    async realtimeDislike(data:Like ){
        const post_id = data.post_id;
        const posts:PostInterface[]=[...this.posts]; 
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        const indexComment=posts[index].likes.findIndex((like:Like)=>data.id===like.id);
        if(indexComment===-1){
            posts[index].likes.slice(indexComment,1);
        }
        this.setPosts(posts);
    }
    async postComment(comment: string, post_id: number){
        const res = await postComment(post_id,comment);
        const posts:PostInterface[]=[...this.posts];
        // const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        // posts[index].comments.push(res.data);
        this.setPosts(posts);
        
    }
    async postLike(post_id:number){
        const res = await postLike(post_id);
        const posts:PostInterface[]=[...this.posts];
        // const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        // posts[index].likes.push(res.data);
        this.setPosts(posts);
        

    }
    async deletePost(post_id:number){
        await deletePost(post_id);
        const posts: PostInterface[]=[...this.posts]
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        posts.splice(index,1);
        this.setPosts(posts);

    }

    async deleteLike(post_id:number,userId:number){
        await deleteLike(post_id);
        const posts: PostInterface[]=[...this.posts]
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        const indexlike=posts[index].likes.findIndex((like:Like)=>userId===like.user_id);
        posts[index].likes.splice(indexlike,1);
        this.setPosts(posts)

    }
     isUserLiked (userId: number, post_id:number){
        const posts:PostInterface[]=[...this.posts];
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)===post_id);
        const indexlike=posts[index].likes.findIndex((like:Like)=>userId===like.user_id);
        if(indexlike===-1){
            return false;
        }
        return true



    }

}
export default new PostStore();