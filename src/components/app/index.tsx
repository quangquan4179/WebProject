import React,{useEffect} from "react";
import { styled } from '@material-ui/styles'
import NavBar from "../../shared/layout/Navbar";
import {Route, Routes} from "react-router-dom"
import AuthStore from "../../shared/authStore/AuthStore";
import { observer } from "mobx-react-lite";
import Home from "./Home";
import RedirectCompoenent from "../RedirectComponent";

import Chat from "../chats";
const DashboardLayoutRoot = styled('div')(({theme}) => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%',
}))
const DashboardLayoutContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  })

interface Data{
    path: string;
    component: JSX.Element;

}
interface appRoute{
    route: Data[]
}
function MyApp (props: appRoute){
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        AuthStore.getUser(Number(userId))
        
    },[])
    return(
        <DashboardLayoutRoot >
           
            <NavBar data={AuthStore.user}/>
            <DashboardLayoutContent>
              
               <Routes>
                   {props.route.map((item)=>{
                    return(<Route key={item.path} path ={item.path} element={<RedirectCompoenent component={item.component}/>}/>)
                   }    
                   )}
               </Routes>
            </DashboardLayoutContent>
        </DashboardLayoutRoot>
    )

}
export default observer(MyApp)