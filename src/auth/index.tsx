import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthStore from '../shared/authStore/AuthStore'
import RedirectLogin from '../components/RedirectLogin'
import Login from './Login'
import Register from './Register'
import { observer} from 'mobx-react-lite'
import MyApp from '../components/app/index';
import { PusherContext,pusher } from '../shared/pusher/Pusher'
import { AppRoute } from '../routes/routes'
import Profile from '../components/profile'
// import EditProfile from '../components/profile/edit'
import ProfileEdit from '../components/app/ProfileEdit'
import ListUser from '../components/listUser/ListUser'
import Chat from '../components/chats/MainChatScreen'
import Random from '../components/app/Random'
const Auth =()=>{
    return(
        <React.Fragment>
            <Routes>
               
                    <>
                     <Route path='/' element={<RedirectLogin component={<PusherContext.Provider value={pusher}>
                        <MyApp route={AppRoute} />
                    </PusherContext.Provider>}/>}/>
                    <Route path='/explore/people' element={<RedirectLogin component={<Random/>}/>}/>
                    <Route path='/account/edit' element={<RedirectLogin component={<ProfileEdit/>}/>}/>
                    <Route path='/profile' element={<RedirectLogin component={<Profile/>}/>}/>
                    <Route path='/inbox' element={<RedirectLogin component={<Chat/>}/>}/>
                   
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    </>
             

            </Routes>
        </React.Fragment>
    )
}
export default observer(Auth)