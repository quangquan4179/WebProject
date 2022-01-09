import { makeObservable, observable } from "mobx";
import { User } from "../shared/interfaces";
import { getAllUser } from "../services/UsersService";
import { getFollow, getFollowed, postFollow } from "../services/FollowService";


class ListUserStore{
    users:User[]=[];
    usersNoneFollow:User[]=[];
    usersFollowed:User[]=[]


    constructor(){
        makeObservable(this,{
            users:observable,
            usersNoneFollow:observable,
            usersFollowed:observable

        })
    }
    setUsers(arr:User[]){
        this.users=arr
    }
    setUserNoneFollow(arr:User[]){
        this.usersNoneFollow=arr
    }
    setUsersFollowed(arr:User[]){
        this.usersFollowed=arr
    }
    async getAlluser(){
        const res=await getAllUser();
        if(res.success){
            this.setUsers(res.data)
            console.log(res.data)
        }
        
       
    }

    async activeUsers(userId:number) {
        const res=await getAllUser();
        let allUsers:User[]=[];
        if(res.success){
            allUsers=res.data;
           
         }
         let  index = allUsers.findIndex((a:User)=>userId===a.id);
        if(index!==-1){
            allUsers.splice(index,1);
            // console.log(allUsers);
        } 
        this.setUsers(res.data)
     
    }
   async postFollow(userId:number){
       await postFollow(userId);
       
   }
    async getFollowed(userId:number){
        const res = await getFollowed(userId)
        if(res.success){
            this.setUsersFollowed(res.data);
            console.log(res.data)
        }
    }
    async mergeUserNoneFollow(userId:number){
        const res1=await getAllUser();
        let allUsers:User[]=[];

        let userFollowed:User[]=[];
        if(res1.success){
           allUsers=res1.data;
          
        }
        let  index = allUsers.findIndex((a:User)=>userId===a.id);
        if(index!==-1){
            allUsers.splice(index,1);
            // console.log(allUsers);
        } 
        const res2 = await getFollow(userId)
        if(res2.success){
            userFollowed=res2.data;
           
        }
        if(userFollowed.length===0){
            this.setUserNoneFollow(allUsers)
        }else{
            for(let user of userFollowed ){
                let  index = allUsers.findIndex((a:User)=>user.id===a.id);
                if(index!==-1){
                    allUsers.splice(index,1);
                }    
            }
            this.setUserNoneFollow(allUsers);
            
            
        }


    }

    
    
    

}

export default new ListUserStore()