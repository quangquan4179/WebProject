import { makeObservable, observable } from "mobx";
import AuthService from "./../../services/AuthService";
class AuthStore {
  isAuth = true;
  user = null;
  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,
    });
  }
    setUser(data: any) {
    this.user = data;
  }
  async login(username: string, password: string) {
    const res = await AuthService.login(username, password);
    if(res.success===true){
      this.setUser(res.data.user)
      this.storeUserId(res.data.user.id)
      this.storeToken(res.data)
    }
  }
  async register(username:string, password:string){
    const res = await AuthService.register(username,password);
  }
  async getUser(userId:number){
    const res = await AuthService.checkToken(userId);
    this.setUser(res.data)
  }
  storeToken(token: any) {
    localStorage.setItem('accessToken', JSON.stringify(token.token))
  }
  storeUserId(userId:number) {
    localStorage.setItem('userId', userId.toString());
  }

  signout(){
    localStorage.removeItem('accessToken')
    this.setUser(null);
  }
  getAccessToken() {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken !== 'undefined' && accessToken) {
      return JSON.parse(accessToken)
    }
    return ''
  }
  loadUser(){
    const accessToken = this.getAccessToken()
  }
}
export default new AuthStore();
