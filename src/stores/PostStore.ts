import { makeObservable, observable } from "mobx";
import { getAllPost } from "../services/PostService";
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

    async getAllPostByUserId( userId: number){

    }

}
export default new PostStore();