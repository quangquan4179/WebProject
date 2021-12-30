import { makeObservable, observable } from "mobx";
import AuthService from "./../../services/AuthService";
import { User,Nullable } from "../interfaces";
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
    }
    return res;
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
    // const accessToken = this.getAccessToken()
    this.getUser(userID)
  }
}
export default new AuthStore();
