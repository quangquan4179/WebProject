import React,{useEffect} from "react";
import { styled } from '@material-ui/styles'
import NavBar from "../../shared/layout/Navbar";
// import {Route, Routes} from "react-router-dom"
import AuthStore from "../../shared/authStore/AuthStore";
import { observer } from "mobx-react-lite";
import Home from "./Home";
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
function MyApp (){
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        Promise.all([AuthStore.getUser(Number(userId))])
        
    },[])
    return(
        <DashboardLayoutRoot >
           
            <NavBar data={AuthStore.user}/>
            <DashboardLayoutContent>
               <Home/>
            </DashboardLayoutContent>
        </DashboardLayoutRoot>
    )

}
export default observer(MyApp)