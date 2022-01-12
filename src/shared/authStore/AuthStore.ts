import { makeObservable, observable } from "mobx";
import AuthService from "./../../services/AuthService";
import { User,Nullable } from "../interfaces";
import uploadAvatar from "../functions/uploadAvatar";
import { postAvatar } from "../../services/UsersService";
import { changePassword } from "../../services/EditService";
class AuthStore {
  isAuth = false;
  user:Nullable<User>=null;
  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,
    });
  }
    setUser(data: any,isAuth:boolean) {
    this.user = data;
    this.isAuth=isAuth
  }
  async login(username: string, password: string) {
    const res = await AuthService.login(username, password);
    if(res.success===true){
      this.setUser(res.data.user,true)
      
      this.storeUserId(res.data.user.id)
      this.storeToken(res.data)
      return res;
    }else{
      this.signout();
      let  data:{}
      return data={
        success:false
      }
    }
    
  }
  async register(username:string, password:string){
    const res = await AuthService.register(username,password);
    return res ;
  }
  async getUser(userId:number){
    const res = await AuthService.checkToken(userId);
    this.setUser(res.data,true)

  }
  storeToken(token: any) {
    localStorage.setItem('accessToken', JSON.stringify(token.token))
  }
  storeUserId(userId:number) {
    localStorage.setItem('userId', userId.toString());
  }

  signout(){
    localStorage.removeItem('accessToken')
    this.setUser(null,false);
    localStorage.removeItem('userId')
  }
  getAccessToken() {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken !== 'undefined' && accessToken) {
      return JSON.parse(accessToken)
    }
    return ''
  }
  loadUser(userID:number){
    const accessToken = this.getAccessToken()
    try{
      if(accessToken!==''){
        this.getUser(userID)
      }else{
        this.signout();
      }

    }catch(err){
      this.signout();
    }

  
    
    
  }
  async uploadAvatar( photoURL: any,userId: number){
    const res = await postAvatar(photoURL,userId);
    if(res.success){
      this.setUser(res.data,true);
    }

  }
  async resetPassword (newPassword:string, oldPassword:string){
    const res = await changePassword(newPassword,oldPassword);
    return res;
  }
}
export default new AuthStore();
