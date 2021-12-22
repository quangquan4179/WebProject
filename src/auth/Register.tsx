import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core';
import { Link} from 'react-router-dom'
import AuthStore from '../shared/authStore/AuthStore'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
interface IData{
  username: string,
  password: string,
  passwordConfirm:string
}

const Register :React.FC<{}> =()=>{
    const[formData,setFormData]=useState<IData>({
        username:'',
        password:'',
        passwordConfirm:''
    });
    const navigate = useNavigate();
    const {username,password,passwordConfirm}:{ username: string, password:string,passwordConfirm:string}=formData;
    const handleChange =( e:any)=>setFormData({...formData,[e.target.name]:e.target.value});
    const handleSubmit =async (e:any) =>{
        e.preventDefault();
        if(password===passwordConfirm){
          if(password.length<6){
            toast.error('Mat khau qua ngan.', {
              position: 'top-right',
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
          else{
            const res =await AuthStore.register(username,password);
            if(res.success){
              toast.success('Đăng kí thanh cong.', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              navigate('/login');

            }
            else{
              toast.error('Đăng kí that bai.', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })

            }
            
          
          
          }
        }
        else{
          toast.error('Mat Khau khong khop.', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })

        }
       
    };
    return(
      <React.Fragment>
        <Box  sx={{
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
        }}>
          <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography
                color='textPrimary'
                variant='h2'
                align="center"
              >
                Đăng kí
              </Typography>
              
              <Box
                sx={{
                  pb: 1,
                  pt: 3,
                }}
              >  
              </Box>
            </Box>
            <TextField
              name='username'
              type='text'
              id='email_login'
              autoFocus
              placeholder='Nhập vào email'
              fullWidth
              label='Username'
              margin='normal'
              variant='outlined'
              onChange={handleChange}
            />
            <TextField
              name='password'
              type='password'
              id='password_login'
              placeholder='Nhập vào mật khẩu'
              fullWidth
              label='Mật khẩu'
              margin='normal'
              variant='outlined'
              onChange={handleChange}
            />
             <TextField
              name='passwordConfirm'
              type='password'
              id='password_confirm'
              placeholder='Nhập lại mật khẩu'
              fullWidth
              label='Mật khẩu confirm'
              margin='normal'
              variant='outlined'
              onChange={handleChange}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color='primary'
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                 Đăng kí
              </Button>
            </Box>

            </form>
            <Box sx={{ mb: 3 }}>
              <Link to='/login' style={{textDecoration: 'none', float: 'right'}}>
              <Typography color='textPrimary'>
                 Bạn đã có tài khoản
              </Typography>
              </Link>
            </Box>

          </Container>

        </Box>

      </React.Fragment>
    );

}
export default Register