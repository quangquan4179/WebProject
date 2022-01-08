import axiosInstance from "./custom_axios";

export const getAllUser =async()=>{
    const res = await axiosInstance.get('/users');
    return res.data;
}