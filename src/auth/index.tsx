import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthStore from '../shared/authStore/AuthStore'
import RedirectLogin from '../components/RedirectLogin'
import Login from './Login'
const Auth :React.FC=()=>{
    return(
        <React.Fragment>
            <Routes>
                {AuthStore.isAuth===false?(
                    <>
                    <Route path='/login' element={<Login/>}/>
                    <Route element={<RedirectLogin/>}/>
                    </>
                ):('')}

            </Routes>
        </React.Fragment>
    )
}
export default Auth