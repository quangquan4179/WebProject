import { makeObservable, observable } from "mobx";
import  {getAllCommentByPostId,postComment} from '../services/CommentService'
class CommentStore{
    comments=[];
    constructor(){
        makeObservable(this,{
            comments:observable
            
        })
    }
    setComments(comments:[]){
        this.comments=comments;
    }

    async getAllComment(id:number){
        const res = await getAllCommentByPostId(id);
        if(res.success){
            this.setComments(res.data);
        }

    }
    async postComment(comment: string, post_id: number){
        const res = await postComment(post_id,comment);
        
    }
}
export default new CommentStore();