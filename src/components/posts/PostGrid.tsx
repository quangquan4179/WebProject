import React,{ useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Post from './Post';
import PostStore from '../../stores/PostStore';
export default function PostGrid() {

  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    PostStore.getAllPost();
  },[])
  return (
    <Box m={4}>
      <Grid container direction='row' justifyContent='center' alignItems='center' spacing={3}  >
        { PostStore.posts.map((post,index )=>(
          <Post data={post} key={index}/>
        ))}
      </Grid>
    </Box>
  );
}