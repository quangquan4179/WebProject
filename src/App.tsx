import { useEffect} from 'react';
// import Auth from './auth'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/theme';
import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
// import MyApp from './components/app'
import { observer } from 'mobx-react-lite';
import AuthStore from './shared/authStore/AuthStore'
import Login from './auth/Login';
import Register from './auth/Register'
import RedirectLogin from './components/RedirectLogin';
function App() {
  useEffect(()=>{
    AuthStore.loadUser()
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path ='/register' element={<Register/>}/>
            <Route path ='/' element={<RedirectLogin/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
export default observer(App);
