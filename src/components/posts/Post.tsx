import React from 'react';
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
import { Box, Modal, Fade } from '@material-ui/core'
import { Nullable } from '../../shared/interfaces';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
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
    },
    commentInput: {
      width: '100%',
      border: '0',
      '&:focus': {
        outline: '0'
      }
    },
    commentButton: {
      cursor: 'pointer',
      marginRight: '5px',
      color: 'rgba(var(--d69,0,149,246),1)'
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


export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface Props2 {
  id: string,
  title: string,
  content: string,
  user_id: number,
  create_at: Date,
  photoURL: string
};
interface Props {
  data?: Nullable<Props2>
}
export default function Post(props: Props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: '70%' }} m={1} >
      <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.data.title}
          subheader="September 14, 2016"
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
          {/* <IconButton >
            < ChatBubbleOutlineIcon />
          </IconButton> */}
        </CardActions>
        <div className={classes.countLikes}>77,413 likes</div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.postOwnerName}>Tên thằng post</span>
            {props.data.content}
          </Typography>
        </CardContent>
        <div className={classes.viewAllComments} onClick={handleOpen}>View all comments</div>

        <div className={classes.postFooter}>
          <input placeholder="Add a comment . . ." className={classes.commentInput} />
          <div className={classes.commentButton}>Post</div>
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
                  R
                </Avatar>
              </div>
              <div>Tên</div>
            </div>
            <div className={classes.bodyComment}>
              <div className={classes.commentItem}>
                <div>
                  <Avatar aria-label="recipe" className={classes.avatar} style={{ width: '30px', height: '30px', fontSize: '16px' }}>
                    R
                  </Avatar>
                </div>
                <div>
                  <span style={{fontWeight: 500, color: 'black', marginRight: '5px'}}>Tên</span>
                  <span>
                    comment asdasdasdassssssssssssssss as dddddddddddddd dasdassssssssssssssss as dddddddddddddd dasdassssssssssssssss as dddddddddddddd
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.footerComment}>
              <input placeholder="Add a comment . . ." className={classes.commentInput} />
              <div className={classes.commentButton}>Post</div>
            </div>
          </div>
        </div>
      </Modal>

    </Box>

  );
}
