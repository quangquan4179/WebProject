import { makeObservable, observable } from "mobx";
import { getAllMessager, postMessager } from "../services/Messages";
import { Messages } from "../shared/interfaces";

class MessagesStore{
    messages:Messages[]=[];
    constructor(){
        makeObservable(this,{
            messages:observable

        })
    }
    setMessages(arr:Messages[]){
        this.messages=arr;
    }
    async getAllMes (room_id:number) {
        const res = await getAllMessager(room_id);
        if(res.success){
            this.setMessages(res.data)
        }
    }
    async postMes( messages:string,room_id:number){
        const res = await postMessager(messages,room_id);
    }
}
export default new MessagesStore();