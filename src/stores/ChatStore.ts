import { makeObservable, observable } from "mobx";
import { PostRoom, getAllRoom } from "../services/RoomService";
import { getAllUser } from "../services/UsersService";
import { Room, User } from "../shared/interfaces";
import { getAllMessager, postMessager } from "../services/Messages";
import { Messages } from "../shared/interfaces";

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
    }
    async getAlluserWithoutMe(userId:number){
        const res=await getAllUser();
        if(res.success){
            const newUsers:User[]=[...res.data];
            let  index = newUsers.findIndex((a:User)=>userId===a.id);
            if(index!==-1){
                newUsers.splice(index,1);
            }
            this.setUser(newUsers);
        }   
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
    async getAllMes (room_id:number) {
        const res = await getAllMessager(room_id);
        if(res.success){
            // this.setMessages(res.data)
        }
    }
    async postMes( messages:string,room_id:number){
        const res = await postMessager(messages,room_id);
    }
    async chatRealtime(data:Messages){
        const roomId= data.room_id;
        const roomNew =[...this.rooms];
        const indexRoom = roomNew.findIndex((room:Room)=>roomId===room.id);
        if(indexRoom!==-1){
            roomNew[indexRoom].messages.push(data);
        }
        
    }
    
}
export default new ChatStore();