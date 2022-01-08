import axiosInstance from "./custom_axios";

export const getFollow = async(userId:number)=>{
    const res = await axiosInstance.get(`/follow/user/${userId}`);
    return res.data
}
export const getFollowed = async(userId:number)=>{
    const res = await axiosInstance.get(`/followed_user/user/${userId}`);
    return res.data
}