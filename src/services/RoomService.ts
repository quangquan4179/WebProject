import { User } from '../shared/interfaces'
import axios from './custom_axios'

export const PostRoom =async(name:string, description:string, users:number[])=>{
    const res = await axios.post('/rooms',{
        name,
        description,
        users
    })
    console.log(res);
}
export const getAllRoom =async(userId:number)=>{
    const res = await axios.get(`/room_user/user/${userId}`);
    return res.data;
}