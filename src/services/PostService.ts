import axios from './custom_axios'


//cho nay call api lay posts theo user id  check post ment
export const getAllPost=async(userId:number)=>{
  const res = await axios.get('/api/')
  if(res.data.success){
      return res.data
  }
}