import axios from './custom_axios'
class AuthService {
  async login(username:string, password: string) {
    const res = await axios.post('/login', { username, password })
    return res.data
  }
  async register(username:string, password:string){
    const res = await axios.post('/register',{username, password});
    return res.data
  }

  async checkToken(userId:number) {
    const res = await axios.get('auth/verifyToken',{
      params : {
        userId
      }
    })
    if (res.data.success) {
      return res.data.user
    }
    return null
  }
}

export default new AuthService()