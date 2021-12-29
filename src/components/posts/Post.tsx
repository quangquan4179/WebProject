import React from 'react';
import { makeStyles, Theme, createStyles, withStyles, WithStyles , } from '@material-ui/core/styles';
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
import { Box} from '@material-ui/core'
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
    },
    dialog:{
      display: 'flex'
    },
    mydiv:{
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
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
  const handleClickOpen = () => {
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
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.data.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton onClick={handleClickOpen}>
                  < ChatBubbleOutlineIcon/>
                </IconButton>
            </CardActions>
            
        </Card>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullScreen>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent >
        <Box   sx={{
          bgcolor:'#484C4E',
          height:'100vh',

        }}>
          <Box className={classes.mydiv} >

          <Box width={'800px'} height={'100%'} >
                  <Card >
              
                      <CardMedia
                          className={classes.media}
                          image={props.data.photoURL}
                          title="Paella dish"
                      />
                      
                  </Card>
                </Box>
                <Box  width={'700px'} sx={{
                  bgcolor:'red'
                }}>
                <div>

                  <div>
                    <p>aaaaa</p>
                  </div>
                  <div>
                    <form>
                      <input  placeholder="Message . . ." />
                      <Button>comment</Button>
                    </form>
                  </div>
                </div>
                  
                </Box>
          </Box>
        </Box>
        </DialogContent>
        
      </Dialog>

    </Box>
    
  );
}
