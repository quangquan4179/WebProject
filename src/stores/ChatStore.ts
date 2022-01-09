import { makeObservable, observable } from "mobx";
import { PostRoom, getAllRoom } from "../services/RoomService";
import { getAllUser } from "../services/UsersService";
import { Room, User } from "../shared/interfaces";

class ChatStore{
    user: User[]=[]
    rooms:Room[]=[];
    constructor(){
        makeObservable(this,{
            user:observable,
            rooms:observable
        })
    }
     setUser(arr:User[]){
         this.user=arr
     }
     setRoom(arr:Room[]){
        this.rooms=arr
    }
    async getAlluser(){
        const res=await getAllUser();
        if(res.success){
            this.setUser(res.data)
        }
        console.log(res);
       
    }
    async postRoom(name:string, description:string, users:number[]){
        const res = await PostRoom(name,description,users);
    }
    async  getAllRooms(userId:number){
        const res = await getAllRoom(userId);
        if(res.success){
            this.setRoom(res.data)
        }
    }
}
export default new ChatStore();