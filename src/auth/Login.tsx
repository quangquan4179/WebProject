import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom'
import AuthStore from './../shared/authStore/AuthStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '@material-ui/core/Card';
interface IData {
  username: string,
  password: string
}
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IData>({
    username: '',
    password: '',
  });
  const { username, password }: { username: string, password: string } = formData;
  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
 const [load,setLoad]=useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoad(true);
    const res = await AuthStore.login(username, password);
    console.log(res)
    if (res.success === false) {
      toast.error('Login false.', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
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
    setLoad(false)

  };
  return (
    <React.Fragment>
      <div style={{
        background: 'linear-gradient(#e66465, #9198e5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh'
      }}>
        <Card style={{margin: 'auto', padding:'40px 30px' }}>
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
                {load?(
                  <Button
                  disabled
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  style={{backgroundColor: 'black', color: 'white'}}
                >
                  Đăng nhập
                </Button>
                ):(
                  <Button
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  style={{backgroundColor: 'black', color: 'white'}}
                >
                  Đăng nhập
                </Button>
                )}
              </Box>

            </form>
            <Box sx={{ mb: 3 }}>
              <Link to='/register' style={{ textDecoration: 'none', float: 'right' }}>
                <Typography
                  color='textPrimary'
                >
                  Bạn chưa có tài khoản
                </Typography>
              </Link>
            </Box>

          </Container>
        </Card>
      </div>
    </React.Fragment>
  );

}
export default Login