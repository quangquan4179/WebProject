import axiosInstance from "./custom_axios";

export const changePassword =async( newPassword:string, oldPassword: string)=>{
    const res = await axiosInstance.post('/reset-password',{
        newPassword,oldPassword
    })
}