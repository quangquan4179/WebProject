import { ReactNode, useEffect,useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/theme';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import AuthStore from './shared/authStore/AuthStore'
import MyApp from './components/app/index'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Auth from './auth';
import { AppRoute } from "./routes/routes"
function App() {
  const [component, setComponent] = useState<ReactNode>();
  const getCurrentView = () => {
    if(AuthStore.user){
      return <MyApp route={AppRoute}/>
    }
    return <Auth/>
  }
  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    if(Boolean(userId)){
      AuthStore.loadUser(Number(userId))
    }
  },[])
  useEffect(() => {
    setComponent(getCurrentView());
  }, [AuthStore.isAuth]);
  
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Router>
          {component}
        </Router>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}
export default observer(App);
