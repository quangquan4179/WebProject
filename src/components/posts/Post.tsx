import React, { useEffect, useContext } from 'react';
import { makeStyles, Theme, createStyles, withStyles, WithStyles, } from '@material-ui/core/styles';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, Dialog, ListItem, Modal, List, Divider, ListItemText,DialogTitle } from '@material-ui/core'
import { Nullable } from '../../shared/interfaces';
import { PusherContext } from '../../shared/pusher/Pusher';
import Button from '@material-ui/core/Button';
// import CommentStore from '../../stores/CommentStore';
import { observer } from "mobx-react-lite";
import { NONAME } from 'dns';
import { PostInterface, Comment } from '../../shared/interfaces';
import PostStore from '../../stores/PostStore';
import { CommentRounded } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
      marginRight: '5px',
    },
    dialog: {
      display: 'flex',
    },
    mydiv: {
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    countLikes: {
      padding: '0 16px',
      color: 'black',
      fontWeight: 700,
    },
    postFooter: {
      zIndex: 2,
      backgroundColor: '#fff',
      width: 'auto',
      height: '40px',
      bottom: '0px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      justifyContent: 'space-between',
      borderTop: '1px solid rgba(var(--b6a,219,219,219),1)',
      padding: '11px 16px',
      '& form': {
        display: 'flex',
        width: '100%',
      },
    },
    commentInput: {
      width: '100%',
      border: '0',
      '&:focus': {
        outline: '0'
      },
    },
    commentButton: {
      marginRight: '5px',
      cursor: 'pointer',
      color: 'rgba(var(--d69,0,149,246),1)',
      border: 0,
      backgroundColor: 'transparent',
    },
    postOwnerName: {
      fontWeight: 700,
      paddingRight: '5px',
      color: 'black',
    },
    viewAllComments: {
      padding: '0 16px 16px 16px',
      cursor: 'pointer',
    },
    headerComment: {
      height: '32px',
      position: 'relative',
      top: 0,
      display: 'flex',
      backgroundColor: '#fff',
      width: 'auto',
      padding: '14px 16px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)',
    },
    bodyComment: {
      height: 'calc(100% - 124px)',
      position: "relative",
    },
    footerComment: {
      zIndex: 2,
      backgroundColor: '#fff',
      width: 'auto',
      height: '40px',
      bottom: '0px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      justifyContent: 'space-between',
      borderTop: '1px solid rgba(var(--b6a,219,219,219),1)',
      padding: '11px 16px',
      '& form': {
        display: 'flex',
        width: '100%',
      },
    },
    commentItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '14px 16px'
    },
    list:{
      width: '100%',
      minwidth:360,
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
    }
  }),
);

interface Props {
  data?: Nullable<PostInterface>
}
function Post(props: Props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [comment, setComment] = React.useState('')
  const userId = Number(localStorage.getItem('userId'));
  const pusher = useContext(PusherContext)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenDialog = async () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await PostStore.postComment(comment, Number(props.data.id));
    setComment('');

  }
  const handleDelete=async(id:number)=>{
    setOpenDialog(false)
    await PostStore.deletePost(id);
   

  }
  useEffect(()=>{
    var channel = pusher.subscribe("comment-notification");
    channel.bind("comment", function(res:any) {
      if(res.success){
        PostStore.realtimeComment(res.data);
      }
      
    });
  },[])


  return (
    <Box sx={{ width: '70%' }} m={1} >
      <Card style={{border: '1px solid rgba(var(--b6a,219,219,219),1)'}}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src ={props.data.user.photoURL!=null?(props.data.user.photoURL):(undefined)}>
              {props.data.user.username}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleOpenDialog}>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.data.user.username}
          style={{color: 'rgba(var(--f75,38,38,38),1)', fontWeight: 600}}
        />
        <CardMedia
          className={classes.media}
          image={props.data.photoURL}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <div className={classes.countLikes}>77,413 likes</div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.postOwnerName}>{props.data.user.username}</span>
            {props.data.content}
          </Typography>
        </CardContent>
        <div className={classes.viewAllComments} onClick={handleOpen}>View all comments</div>

        <div className={classes.postFooter}>
          <form onSubmit={handleSubmit}>
            <input placeholder="Add a comment . . ." className={classes.commentInput} onChange={handleChangeComment} type="text" value={comment} />
            <button className={classes.commentButton} type="submit">Post</button>
          </form>
        </div>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: 'flex' }}
      >
        <div style={{
          width: '70%', height: '90vh', display: 'flex',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', backgroundColor: '#fff'
        }}>
          <div style={{ width: '65%' }}>
            <img src={props.data.photoURL} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <div style={{ width: '35%' }}>
            <div className={classes.headerComment}>
              <div>
                <Avatar aria-label="recipe" className={classes.avatar} src ={props.data.photoURL!=null?(props.data.photoURL):(undefined)}>
                  {props.data.user.username}
                </Avatar>
              </div>
              <div>{props.data.user.username}</div>
            </div>
            <div className={classes.bodyComment}>
              {props.data.comments?(
                props.data.comments.map((data:Comment,index:number ) => {
                  return (
                    <div className={classes.commentItem} key={index}>
                      <div>
                        <Avatar src={data.user.photoURL!=null?(data.user.photoURL):(undefined)} aria-label="recipe" className={classes.avatar} style={{ width: '30px', height: '30px', fontSize: '16px' }}>
                          {data.user.username}
                        </Avatar>
                      </div>
                      <div>
                        <span style={{ fontWeight: 500, color: 'black', marginRight: '5px' }}> {data.user.username}</span>
                        <span>
                          {data.comment}
                        </span>
                      </div>
                    </div>)
                })
              ):('')}
            </div>
            <div className={classes.footerComment}>
              <form onSubmit={handleSubmit}>
                <input placeholder="Add a comment . . ." className={classes.commentInput} onChange={handleChangeComment} value={comment}/>
                <Button className={classes.commentButton} type="submit">Post</Button>
              </form>

            </div>
          </div>
        </div>
      </Modal>
      <Dialog open={openDialog}
       onClose={handleCloseDialog}
       aria-labelledby="simple-dialog-title"
      > 
      <DialogTitle id="simple-dialog-title">what do you want ???</DialogTitle>
       <div className={classes.list}>
        <List>
            <Divider />
            {props.data.user_id===userId?(
              <>
                <ListItem button onClick={()=>{handleDelete(props.data.id)}}>
                  <ListItemText primary="Delete" ></ListItemText>
                </ListItem>
                  <Divider />
                <ListItem button>
                  <ListItemText primary="Edit" ></ListItemText>
                </ListItem>
              </>
            ):(
              <>
              <ListItem button>
                <ListItemText primary="Follow"></ListItemText>
              </ListItem>
              <Divider />
              </>
            )}
            
            
          </List>
       </div>

      </Dialog>

    </Box>

  );
}

export default observer(Post)