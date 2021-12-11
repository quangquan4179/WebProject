import React,{ useState, useEffect} from 'react';
import Auth from './auth'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/theme';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MyApp from './components/app'
import { observer } from 'mobx-react-lite';
import AuthStore from './shared/authStore/AuthStore'
function App() {
  const [component, setComponent] = useState<any>();
  const getCurrentView =()=>{
    if(AuthStore.user!==null){
      return <MyApp/>
    }
    return <Auth/>
  }
  useEffect(()=>{
    return setComponent(getCurrentView());
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Router>
         {component}
        </Router>
      </div>
    </ThemeProvider>
  );
}
export default observer(App);
