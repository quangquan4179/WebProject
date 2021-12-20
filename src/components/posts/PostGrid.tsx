import React,{ useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostCard from './Post';
import PostStore from '../../stores/PostStore';
export default function PostGrid() {
  const listPost = [{
    date: new Date(20/6/2000),
    title: 'Post 1',
    content: 'content of Post 1'
  },{
    date: new Date(21/12/2001),
    title: 'Post 2',
    content: 'content of Post 2'
  },{
    date: new Date(10/6/2010),
    title: 'Post 3',
    content: 'content of Post 3'
  },]

  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    //call api o day voi postStore method getAllPostByUserId 
    PostStore.getAllPostByUserId(Number(userId))
  },[])
  return (
    <Box m={4}>
      <Grid container direction='row' justifyContent='center' alignItems='center' spacing={3}  >
        { listPost.map((post,index )=>(
          <PostCard key={index}/>
        ))}
      </Grid>
    </Box>
  );
}