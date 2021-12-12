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
  async login(email: string, password: string) {
    const res = await AuthService.login(email, password)
  }
  async register(email:string, password:string, passwordConfirm:string){
    const res = await AuthService.register(email,password,passwordConfirm);
  }
  
}
export default new AuthStore();
