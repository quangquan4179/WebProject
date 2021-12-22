import { Component } from 'react'
import Home from '../components/app/Home'
import Chat from '../components/chats'
export const AppRoute=[
    {
        path:'/',
        component:<Home/>
    },
    { 
        path:'/inbox',
        component: <Chat/>
    }
]