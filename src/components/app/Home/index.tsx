import React from 'react'
import CreatePost from '../../posts/CreatePost';
import PostGrid from '../../posts/PostGrid';
const Home :React.FC=()=>{
     return(
         <React.Fragment>
             <CreatePost/>
             <PostGrid/>
         </React.Fragment>
     )
}
export default Home;