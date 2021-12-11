import { action, makeObservable, observable } from 'mobx'
class AuthStore {
    isAuth =null
    user = true
    constructor(){
        makeObservable(this,{
        isAuth: observable,
        user: observable,
        })
    }
   
}
export default new AuthStore();