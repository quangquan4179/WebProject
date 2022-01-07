import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Room from './Room';
import { Avatar, Button, Chip, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, TextField, Typography } from "@material-ui/core"


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '65%',
      height: '80vh',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '5px',
    },
    sidebar: {
      backgroundColor: 'green',
      // height: '100%',
      width: drawerWidth * 2
    },
    contentRight: {
      // height: '80vh',
      flexGrow: 1,
      height: '100%',
      position: 'relative',
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
      zIndex:2,
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
    }
  }),
);

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.sidebar}>

        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
      <div className={classes.contentRight}>
            
        <div className={classes.chatContainer}>
          <Room/>
        </div>
      </div>

    </div>
  );
}
