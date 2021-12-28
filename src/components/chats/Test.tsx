import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Avatar, Button, Chip, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, TextField, Typography} from "@material-ui/core"


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width:'60%',
      height:'90vh',
      border: '1px solid'

      
    },
    sidebar:{
        backgroundColor: 'green',
        height: '100%',
        width: drawerWidth*2
    },
    contentRight:{
        height: '90vh',
        flexGrow:1
    },
    chatContainer: {
        display: "flex",
        flexFlow: "column",
        flex: "1",
        margin: ".5em 1em 0 1em",
    
        "@media (max-width: 600px)": {
          margin: "1em 0",
        },
    },
    chatMessageWindow: {
        border: "1px solid #ccc",
        borderRadius: "3px",
        // margin: ".5em",
        flex: "1",
        fontSize: "13px",
    
        overflowY: "auto",
        padding: "4px",
    
        "@media (max-width: 600px)": {
          border: "none",
          borderRadius: "0",
          padding: "0",
        },
    },
      chatBar: {
        display: "flex",
        margin: "1em 0",
        alignSelf: "flex-end",
    
        "@media (max-width: 600px)": {
          margin: "0",
        },
      
    },
    chatMessageWrapper: {
        display: "flex",
        flexDirection: "column",
    },
    userListIcon: {
        marginRight: "0.5em",
    },
    chatBarInput: {},
    chatSendButton: {},
    userListPanel: {
        flex: "0 1",
        alignSelf: "flex-start",
    },

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

            <div  className={classes.chatContainer}>
                <div className={classes.chatMessageWindow}>
                    <div  className={classes.chatMessageWrapper}>
                        <ListItem alignItems="flex-start" >
                                a
                        </ListItem>
                        <div style={{ float: "left", clear: "both", paddingBottom: "2em" }}>
                        <i>User is typing</i>
                        </div>

                    </div>
                    <form>
                        <div className={classes.chatBar}>
                            <IconButton className={classes.userListIcon}>
                                <ListItemIcon>
                                    aaaaaaaa
                                </ListItemIcon>
                            </IconButton>
                            <TextField
                                autoFocus
                                className={classes.chatBarInput}
                                label="Send a message"
                                variant="outlined" 
                                fullWidth
                                />
                            <Button 
                            type="submit"
                            variant="outlined" >seen</Button>
                        </div>
                    </form>

                </div>

            </div>
        </div>

    </div>
  );
}
