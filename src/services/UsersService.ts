import axiosInstance from "./custom_axios";

export const getAllUser =async()=>{
    const res = await axiosInstance.get('/users');
    return res.data;
}

export const postAvatar=async( photoURL:any, userId:number)=>{
  const res = await axiosInstance.put(`/users/${userId}`,{
    photoURL
  })
  return res.data
}