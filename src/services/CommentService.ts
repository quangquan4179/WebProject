import axios from './custom_axios'


export const getAllCommentByPostId =async(id:number)=>{
    const res = await axios.get(`/comments/post/${id}`);
    return res.data;

}

export const postComment =async(post_id: number, comment: string)=>{
    const res = await axios.post('/comments',{post_id,comment})
    return res.data;
}