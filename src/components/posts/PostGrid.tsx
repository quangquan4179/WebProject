import React,{ useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Post from './Post';
import PostStore from '../../stores/PostStore';
import { PusherContext} from '../../shared/pusher/Pusher'
import {observer} from 'mobx-react-lite'
 function PostGrid() {

  const pusher=useContext(PusherContext);

  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    PostStore.getAllPost();
    var channel = pusher.subscribe("post-notification");
    channel.bind("post", function(res:any) {
      if(res.success){
        PostStore.realtimePost(res.data);
      }
    });


  },[])
  return (
    <div>
      <div>
        { PostStore.posts.map((post,index )=>(
          <Post data={post} key={index}/>
        ))}
      </div>
    </div>
  );
}
export default observer(PostGrid)