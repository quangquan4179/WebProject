import { ReactNode, useEffect,useState, useLayoutEffect} from 'react';
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
import {pusher, PusherContext} from './shared/pusher/Pusher'
function App() {
  const [component, setComponent] = useState<ReactNode>();
  const getCurrentView = () => {
    if(AuthStore.user){
      
      return <PusherContext.Provider value={pusher}>
            <MyApp route={AppRoute}/>
      </PusherContext.Provider>
    }
    else{
      
      return <Auth/>
    }
  }
  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    if(Boolean(userId)){
      AuthStore.loadUser(Number(userId))
    }
  },[])
  useLayoutEffect(() => {
    setComponent(getCurrentView());
  }, [AuthStore.isAuth]);
  
  return (
    <ThemeProvider theme={theme}>
      <div className="container" style={{backgroundColor : '#fafafa', minHeight: '100vh'}}>
        <Router>
          {component}
        </Router>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}
export default observer(App);
