import { makeObservable, observable } from "mobx";
import { getAllUser } from "../services/UsersService";
import { User } from "../shared/interfaces";

class ChatStore{
    user: User[]=[]
    constructor(){
        makeObservable(this,{
            user:observable
        })
    }
     setUser(arr:User[]){
         this.user=arr
     }



    async getAlluser(){
        const res=await getAllUser();
        if(res.success){
            this.setUser(res.data)
        }
        console.log(res);
       
    }
}
export default new ChatStore();