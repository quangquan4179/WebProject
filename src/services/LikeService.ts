import axios from "./custom_axios";

export const postLike =async(post_id:number)=>{
    const res = await axios.post('/liked_post',{
        post_id
    })
    return res.data
}
export const deleteLike =async(post_id:number)=>{
    const res = await axios.delete(`/liked_post/${post_id}`)
}