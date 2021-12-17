import React from 'react'
import { Navigate } from 'react-router-dom'
import MyApp from './app/index'

function RedirectLogin ( ){
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
  if(!isLoggedIn) return <Navigate to="/login" />
  return <MyApp/>
}

export default RedirectLogin