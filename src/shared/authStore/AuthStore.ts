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
  async login(data: any) {
    const res = await AuthService.login(data.email, data.password);
  }
  
}
export default new AuthStore();
