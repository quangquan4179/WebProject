import React from "react";
import { styled } from '@material-ui/styles'
import NavBar from "../../shared/layout/Navbar";
import {Route, Routes} from "react-router-dom"
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
const MyApp :React.FC =()=>{
    return(
        <DashboardLayoutRoot >
            <NavBar/>
            <DashboardLayoutContent>
                <Home/>
            </DashboardLayoutContent>
            
            {/* <>
                <Routes>
                    <Route path ='/' element={<Home/>}/>
                </Routes>
            </> */}
            

        </DashboardLayoutRoot>
    )

}
export default MyApp