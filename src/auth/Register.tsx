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
interface IData{
  email: string,
  password: string,
  passwordConfirm:string
}

const Register :React.FC<{}> =()=>{
    const[formData,setFormData]=useState<IData>({
        email:'',
        password:'',
        passwordConfirm:''
    });
    const {email,password,passwordConfirm}:{email: string, password:string,passwordConfirm:string}=formData;
    const handleChange =( e:any)=>setFormData({...formData,[e.target.name]:e.target.value});
    const handleSubmit =async (e:any) =>{
        e.preventDefault();
        await AuthStore.register(email,password,passwordConfirm);
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
              name='email'
              type='email'
              id='email_login'
              autoFocus
              placeholder='Nhập vào email'
              fullWidth
              label='Email'
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
              <Link to='/login'>
              <Typography color='textPrimary'>
                 Bạn đã có tài khoản ? Sign In
              </Typography>
              </Link>
            </Box>

          </Container>

        </Box>

      </React.Fragment>
    );

}
export default Register