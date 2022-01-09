import axiosInstance from "./custom_axios";

export const postMessager=async(message:string,room_id:number)=>{
    const res = await axiosInstance.post('/messages',{
        message,room_id
    })
    return res.data;

}
export const getAllMessager=async(room_id:number)=>{
    const res = await axiosInstance.get(`/messages/room/${room_id}`
   )
    return res.data;

}