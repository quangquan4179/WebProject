import axios from './custom_axios'

//cho nay call api lay posts theo user id  check post ment
export const getAllPost=async()=>{
  const res = await axios.get('/posts')
  if(res.data.success){
      return res.data
  }
}

export const createPost=async(content:string, photoURL:any)=>{
  const res = await axios.post('/posts',{
    content, photoURL
  })
  return res.data
}
export const deletePost =async(post_id: number)=>{
  const res = await axios.delete(`/posts/${post_id}`);

}
export const getPostByUserId =async(user_id: number)=>{
  const res = await axios.get(`/posts/user/${user_id}`);
  if(res.data.success){
    return res.data
  }

}