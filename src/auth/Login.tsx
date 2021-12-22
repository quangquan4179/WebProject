import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core';
import { Link} from 'react-router-dom'
import AuthStore from './../shared/authStore/AuthStore';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
interface IData {
  username: string,
  password: string
}
function Login(){
    const navigate = useNavigate();
    const[formData,setFormData]=useState<IData>({
      username:'',
      password:'',
    });
    const {username , password}:{username :string, password:string} =formData ;
    const handleChange =(e :any)=>setFormData({...formData, [e.target.name]:e.target.value});

    const handleSubmit =async (e:any) =>{
      e.preventDefault();
      const res =await AuthStore.login(username,password);
      console.log(res)
      if(res.success===false){
        toast.error('Login false.', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }else{
        toast.success('Login Success.', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        navigate('/');
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
                Đăng nhập
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
            <Box sx={{ py: 2 }}>
              <Button
                color='primary'
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                Đăng nhập
              </Button>
            </Box>

            </form>
            <Box sx={{ mb: 3 }}>
              <Link to='/register' style={{textDecoration: 'none', float: 'right'}}>
                <Typography
                  color='textPrimary'
                >
                  Bạn chưa có tài khoản
                </Typography>
              </Link>
            </Box>

          </Container>

        </Box>

      </React.Fragment>
    );

}
export default Login