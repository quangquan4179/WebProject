import { makeObservable, observable } from "mobx";
import { getAllPost, createPost } from "../services/PostService";
class PostStore{
    posts=[];
    constructor(){
        makeObservable(this,{
            posts:observable,

        })
    }
    setPosts(arrayPosts: []){
        this.posts=arrayPosts
    }

    async getAllPost(){
        const res = await getAllPost();
        this.setPosts(res.data);
    }
    
    async createPost(content: string, photoURL: any, user_id: number){
        const res = await createPost(content, photoURL, user_id);
    }
}
export default new PostStore();