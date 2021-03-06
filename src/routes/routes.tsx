import { Component } from 'react'
import Home from '../components/app/Home'
import Chat from '../components/chats'
import ListUserFull from '../components/listUser/ListUserFull'
import Profile from '../components/profile'
import EditProfile from '../components/profile/edit'
export const AppRoute=[
    {
        path:'/',
        component:<Home/>
    },
    { 
        path:'/inbox',
        component: <Chat/>
    },
    { 
        path:'/profile',
        component: <Profile/>
    },
    {
        path:'account/edit',
        component: <EditProfile/>
    },
    {
        path:'/explore/people',
        component: <ListUserFull/>
    }
]