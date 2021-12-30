import React, { useEffect } from 'react';
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
import { Box, Modal } from '@material-ui/core'
import { Nullable } from '../../shared/interfaces';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CommentStore from '../../stores/CommentStore';
import { observer } from "mobx-react-lite";
import { NONAME } from 'dns';
import { PostInterface, Comment } from '../../shared/interfaces';
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
    }
  }),
);
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })

interface Props {
  data?: Nullable<PostInterface>
}
function Post(props: Props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await CommentStore.postComment(comment, Number(props.data.id));
    setComment('');

  }


  return (
    <Box sx={{ width: '70%' }} m={1} >
      <Card style={{border: '1px solid rgba(var(--b6a,219,219,219),1)'}}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.data.user.username}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
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
            <input placeholder="Add a comment . . ." className={classes.commentInput} onChange={handleChangeComment} />
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
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {props.data.user.username}
                </Avatar>
              </div>
              <div>{props.data.user.username}</div>
            </div>
            <div className={classes.bodyComment}>
              {props.data.comments.map((data:Comment ) => {
                console.log(data);
                return (
                  <div className={classes.commentItem}>
                    <div>
                      <Avatar aria-label="recipe" className={classes.avatar} style={{ width: '30px', height: '30px', fontSize: '16px' }}>
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
              })}
            </div>
            <div className={classes.footerComment}>
              <form onSubmit={handleSubmit}>
                <input placeholder="Add a comment . . ." className={classes.commentInput} onChange={handleChangeComment} />
                <button className={classes.commentButton} type="submit">Post</button>
              </form>

            </div>
          </div>
        </div>
      </Modal>

    </Box>

  );
}

export default observer(Post)