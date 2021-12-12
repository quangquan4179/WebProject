import axios from './custom_axios'
class AuthService {
  async login(email:string, password: string) {
    const res = await axios.post('/login', { email, password })
    return res.data
  }
  async register(email:string, password:string, passwordConfirm:string){
    const res = await axios.post('/register',{email, password,passwordConfirm});
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