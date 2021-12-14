import { action, makeObservable, observable } from "mobx";
import AuthService from "./../../services/AuthService";
class AuthStore {
  isAuth = null;
  user = null;
  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,
    });
  }
    SetUser(data: any) {
    this.user = data;
  }
  async login(username: string, password: string) {
    console.log(username)
    const res = await AuthService.login(username, password)
  }
  async register(username:string, password:string){
    const res = await AuthService.register(username,password);
  }
  
}
export default new AuthStore();
