import React,{useEffect} from "react";
import { styled } from '@material-ui/styles'
import NavBar from "../../shared/layout/Navbar";
import {Route, Routes} from "react-router-dom"
import AuthStore from "../../shared/authStore/AuthStore";
import { observer } from "mobx-react-lite";
// import Home from "./Home";
import RedirectComponent from "../RedirectComponent";
// import EditProfile from "../profile/edit";
import MainChatScreen from "../chats/MainChatScreen";
// import Chat from "../chats";
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

function Chat (){
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        AuthStore.getUser(Number(userId))
        
    },[])
    return(
        <DashboardLayoutRoot >
            <NavBar data={AuthStore.user}/>
            <DashboardLayoutContent>
              
               <Routes>
                   
                    <Route  element={<RedirectComponent component={<MainChatScreen/>}/>}/>)
                  
               </Routes>
            </DashboardLayoutContent>
        </DashboardLayoutRoot>
    )

}
export default observer(Chat)