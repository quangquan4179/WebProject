import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthStore from '../shared/authStore/AuthStore'
import RedirectLogin from '../components/RedirectLogin'
import Login from './Login'
import Register from './Register'
import { observer} from 'mobx-react-lite'
const Auth =()=>{
    return(
        <React.Fragment>
            <Routes>
                {AuthStore.isAuth===false?(
                    <>
                    {/* <Route  element={<RedirectLogin path='/'/>}/> */}
                    <Route path='/' element={<RedirectLogin component={<Login/>}/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                   
                    </>
                ):(
                   ''
                )}

            </Routes>
        </React.Fragment>
    )
}
export default observer(Auth)