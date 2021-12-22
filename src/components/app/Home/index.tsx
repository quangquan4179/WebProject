import React,{ useEffect} from 'react'
import CreatePost from '../../posts/CreatePost';
import PostGrid from '../../posts/PostGrid';
import { observer } from "mobx-react-lite";
import AuthStore from '../../../shared/authStore/AuthStore'

const Home =()=>{
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        Promise.all([AuthStore.getUser(Number(userId))])
        
    },[])
     return(
         <React.Fragment>
             <CreatePost data={AuthStore.user}/>
             <PostGrid />
         </React.Fragment>
     )
}
export default observer(Home);