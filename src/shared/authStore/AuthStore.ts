import { action, makeObservable, observable } from 'mobx'
class AuthStore {
    isAuth =null
    user = null
    constructor(){
        makeObservable(this,{
        isAuth: observable,
        user: observable,
        })
    }
   
}
export default new AuthStore();