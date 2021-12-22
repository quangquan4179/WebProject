import React, { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'


interface Props{
  component: ReactElement
}
function RedirectComponent ( props:Props){
  
  return props.component
}

export default RedirectComponent