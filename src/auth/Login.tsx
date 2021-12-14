import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core';
import { Link} from 'react-router-dom'
import AuthStore from './../shared/authStore/AuthStore';
interface IData {
  username: string,
  password: string
}
const Login :React.FC<{}> =()=>{
    // const [loading, setLoading ]=useState(false);
  
  
    const[formData,setFormData]=useState<IData>({
      username:'',
      password:'',
    });
    const {username , password}:{username :string, password:string} =formData ;
    const handleChange =(e :any)=>setFormData({...formData, [e.target.name]:e.target.value});

    const handleSubmit =async (e:any) =>{
      e.preventDefault();
      console.log(username);
      await AuthStore.login(username,password);
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
              label='username'
              margin='normal'
              variant='outlined'
              onChange={handleChange}
            />
            <TextField
              name='password'
              type='text'
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
              <Link to='/register'>
                <Typography
                  color='textPrimary'
                >
                  Bạn chưa có tài khoản? Sign Up
                </Typography>
              </Link>
            </Box>

          </Container>

        </Box>

      </React.Fragment>
    );

}
export default Login