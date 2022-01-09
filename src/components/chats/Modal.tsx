import { Button, Modal } from '@material-ui/core'
import React, { ReactElement, useState , useEffect} from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
// import ListUserStore from '../../stores/ListUserStore';
import { Room, User } from '../../shared/interfaces';
import ChatStore from '../../stores/ChatStore';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatMessageWindow: {
      flex: "1",
      fontSize: "16px",
      overflowY: "auto",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    createRoomBtn: {
      textTransform: "none",
      backgroundColor: '#0095f6',
      color: '#fff',
      border: '1px solid transparent',
      fontSize: '14px',
      fontWeight: 600,
      padding: '5px 9px',
      '&:hover': {
        backgroundColor: '#0095f6',
        color: '#fff',
      }
    },
    modal: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalCreateRoom: {
      backgroundColor: '#fff',
      width: '30%',
      height: 'auto',
      borderRadius: '12px',
      marginTop: '-300px',
    },
    modalHeader: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #dbdbdb',
      height: '43px',
      padding: '0 16px',
    },
    modalTitle: {
      fontSize: '16px',
      fontWeight: 600,
    },
    modalButton: {
      color: '#0095f6',
      fontSize: '14px',
      lineHeight: '18px',
      cursor: 'pointer',
      fontWeight: 600,
    },
    modalBody: {
      display: 'flex',
      width: 'auto',
      // justifyContent: 'flex-start', 
      alignItems: 'center',
      padding: '4px 12px',
    },
    modalSearch: {
      '& div div::before': {
        border: 0,
      },
      '& div div::after': {
        border: 0,
      },
      '&:hover': {
        border: 0,
      },
      '&:hover :before': {
        border: 0,
      },
      '&:hover div::after': {
        border: 0,
      }
    },
    MuiAutocompleteInputRoot: {
      '&:hover :before': {
        border: 0,
      },
    }
  }),
);
 interface ModelProps{
   data: User[],
  
 }

export default function ModalChat(props: ModelProps): ReactElement {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name,setName]= useState<User[]>([]);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick=()=>{
    if(name.length!=0){
      setOpen(false);
      const roomName =name.map((user:User)=>(user.username));
      const result = roomName.join('')
      const userIdarr= name.map((user:User)=>(user.id));
      ChatStore.postRoom(result,result,userIdarr);

    }
  }
 
  return (

    <div className={classes.chatMessageWindow}>
      <Button onClick={handleOpen} className={classes.createRoomBtn}>
        Send Message
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" className={classes.modal}>
        <div className={classes.modalCreateRoom}>
          <div className={classes.modalHeader}>
            <CloseIcon style={{cursor: 'pointer'}} onClick={handleClose}/>
            <div className={classes.modalTitle}>New Message</div>
            <div className={classes.modalButton} onClick={handleClick}>Next</div>
          </div>
          <div className={classes.modalBody}>
            <div>To: </div>
            <div style={{ width: '100%', marginLeft: '5px',  }}>
              <Autocomplete
                className={classes.modalSearch}
                multiple
                id="tags-filled"
                freeSolo
                fullWidth
                getOptionLabel={(option:User)=>option.username}
                options={props.data.map((option:User) => option)}
                renderTags={(value: User[], getTagProps) =>{
                  setName(value);
                  return(
                    value.map((option: User, index: number) => {
                      return<Chip variant="outlined" label={option.username} {...getTagProps({ index })} />
                    })
                  )
                }}
                renderInput={(params) => (
                  // <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />
                  <TextField {...params} />
                )}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
