import { makeObservable, observable } from "mobx";
import { getAllPost, createPost, deletePost } from "../services/PostService";
import { postComment } from "../services/CommentService";
import { PostInterface } from "../shared/interfaces";
import { timestamp } from "../shared/functions/convertTime";
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
    
    async createPost(content: string, photoURL: any, user_id: number){
        const res = await createPost(content, photoURL, user_id);
        const newpost:PostInterface[]=[...this.posts];
        newpost.unshift(res.data);
        this.setPosts(newpost)


    }
    async postComment(comment: string, post_id: number){

        const res = await postComment(post_id,comment);
        const posts:PostInterface[]=[...this.posts];
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)==post_id);
        posts[index].comments.push(res.data);
        this.setPosts(posts);
        
    }
    async deletePost(post_id:number){
        await deletePost(post_id);
        const posts: PostInterface[]=[...this.posts]
        const index :number= posts.findIndex((e: PostInterface)=>Number(e.id)==post_id);
        posts.splice(index,1);
        this.setPosts(posts);

    }
}
export default new PostStore();