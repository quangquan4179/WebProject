import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Room from './Room';
import { Avatar, Button, Chip, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, TextField, Typography } from "@material-ui/core"
import ChatStore from '../../stores/ChatStore';
import { User } from '../../shared/interfaces';
import { firstChar } from '../../shared/functions/sliceName';
import ModalChat from './Modal';
import { observer } from 'mobx-react-lite';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '65%',
      height: '80vh',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '4px',
      backgroundColor: '#fff',
    },
    av: {
      width: '100%',
      maxWidth: '36ch'
    },
    sidebar: {
      // backgroundColor: 'green',
      // height: '100%',
      width: '40%',
    },
    contentRight: {
      // height: '80vh',
      width: '60%',
      flexGrow: 1,
      height: '100%',
      position: 'relative',
      borderLeft: '1px solid #dbdbdb',
    },
    chatContainer: {
      display: "flex",
      flexFlow: "column",
      flex: "1",
      height: '100%',
    },
    chatMessageWindow: {
      flex: "1",
      fontSize: "16px",

      overflowY: "auto",
    },
    chatMessageWrapper: {
      // display: "flex",
      // flexDirection: "column",
      height: 'calc(100% - 220px)',
      position: "relative",
    },
    chatHeader: {
      display: "flex",
      height: 60,
      borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)',
      alignItems: "center",
      padding: '0 20px',
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: '#fff'
    },
    chatFooter: {
      zIndex: 2,
      backgroundColor: '#fff',
      width: 'calc(100% - 60px)',
      height: '44px',
      position: 'absolute',
      bottom: '0px',
      display: 'flex',
      alignItems: 'center',
      margin: '20px',
      fontSize: '16px',
      justifyContent: 'space-between',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '22px',
      paddingLeft: '11px',
      paddingRight: '8px',
    },
    chatInput: {
      width: '100%',
      border: '0',
      '&:focus': {
        outline: '0'
      }
    },
    chatButton: {
      cursor: 'pointer',
      marginRight: '5px',
      color: 'rgba(var(--d69,0,149,246),1)'
    },
    chatMesList: {
      display: 'block',
      paddingBottom: "84px",
    },
    chatMesItemLeft: {
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(var(--b6a,219,219,219),1)',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '22px',
      marginBottom: '5px',
      padding: '16px',
      width: 'fit-content',
    },
    chatMesItemRight: {
      margin: '1rem 1rem 1rem auto',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(var(--b6a,219,219,219),1)',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '22px',
      marginBottom: '5px',
      padding: '16px',
      width: 'fit-content',
    },
    header: {
      borderBottom: '1px solid #dbdbdb',
      display: 'flex',
      justifyContent: 'center',
      height: '60px',
      alignItems: 'center',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    listUser: {
      padding: '10px 0',
    },
    itemUser: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px 15px',
      '&:hover': {
        backgroundColor: '#efefef',
      }
    },
    avatar: {
      height: '56px',
      width: '56px',
      marginRight: '12px',
    }
  }),
);

function ClippedDrawer() {
  const [room, setRoom] = useState('s');
  const classes = useStyles();
  useEffect(() => {
    ChatStore.getAlluser();
  }, [])
  return (
    <div className={classes.root}>

      <div className={classes.sidebar}>
        <div className={classes.header}>
          Header
          <span style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AddIcon />
          </span>
        </div>
        <div className={classes.listUser}>
          {ChatStore.user.map((user: User, index) => (
            <>
              <div key={index} className={classes.itemUser}>
                <Avatar src={user.photoURL !== null ? (user.photoURL) : (undefined)} className={classes.avatar}>
                  {firstChar(user.username)}
                </Avatar>
                <div>
                  {user.username}
                </div>

              </div>
            </>
          ))}
        </div>
      </div>
      <div className={classes.contentRight}>

        <div className={classes.chatContainer}>
          {!room ? (
            <Room />
          ) : (
            <ModalChat />
          )
          }


        </div>
      </div>

    </div>
  );
}
export default observer(ClippedDrawer)