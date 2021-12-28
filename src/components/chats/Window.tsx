import React, { ReactElement, useState } from 'react'
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {Avatar, Button, Chip, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, TextField, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useMediaQuery } from "react-responsive";
import Load from './Load';

interface Props {
    load:Boolean
    
}
const useStyle = makeStyles((theme)=>({
    "@global": {
        "*::-webkit-scrollbar": {
          width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          outline: "3px solid slategrey",
        },
      },
      content: {
        padding: 0,
      },
      root: {
        display: "flex",
        padding: "0",
        height: "85vh",
    
        "@media (max-width: 600px)": {
          height: "89vh",
        },
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
      chatBarInput: {},
      chatSendButton: {},
      userListPanel: {
        flex: "0 1",
        alignSelf: "flex-start",
      },
      userListIcon: {
        marginRight: "0.5em",
      },
      mobileUserList: {
        margin: "1em",
      },
      UserListDivider: {
        width: "100%",
      },
      typing: {
        margin: "1rem",
      },
      chatMessageInitial: {
        paddingLeft: "80px",
        marginLeft: "-72px",
      },
      chatMessageSequential: {
        paddingLeft: "64px",
      },
      chatAvatar: {
        margin: 0,
      },
      chatMessageWrapper: {
        display: "flex",
        flexDirection: "column",
      },
      fromUserBubble: {
        marginBottom: ".5rem",
        maxWidth: "fit-content",
      },
      chatDivider: {
        width: "100%",
        marginBottom: "1rem",
      }
})
)
export default function Window({load}: Props): ReactElement {
    const classes=useStyle();
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
    let messagesEndRef = React.useRef(null);
    const [chatMessage, setChatMessage] = useState("");
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawer, setDrawer] = useState(false);
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
        //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };

    const renderWithNewSeen =()=>{
        return(
            <>
             <ListItemAvatar className={classes.chatAvatar}>
                    <Avatar
                    alt="Your Avatar">
                    </Avatar>
             </ListItemAvatar>

                <Chip
                className={classes.fromUserBubble}
                label={ ""}
                size="small"
                ></Chip>
                <Typography  className={classes.chatMessageInitial}  variant="body1">

                </Typography>
            </>
        )
    }
    const renderWithSameSender = (message:any) => (
        <Typography className={classes.chatMessageSequential} variant="body1">
          aaaa
        </Typography>
      );

    //   const renderMessages = (messages:[], message, i) => {
    //     const prevSender = messages[i - 1]?.sender.username;
    //     if (i === 0) {
    //       return renderWithNewSender(message);
    //     }
    //     // Compare messages after intial and render new/successive conditionally
    //     switch (messages[i - 1]?.sender?._id) {
    //       case message?.sender?._id:
    //         return renderWithSameSender(message);
    //       case !message?.sender?._id:
    //         return renderWithNewSender(message);
    //       default:
    //         return renderWithNewSender(message);
    //     }
    //   };
    return load?( <div  className={classes.root}>
        <div className={classes.chatContainer}>
            <div className={classes.chatMessageWindow}>
                <List>
                    <div className={classes.chatMessageWrapper}>
                        <ListItem alignItems="flex-start" >
                            a
                           

                        </ListItem>
                    </div>
                    <div style={{ float: "left", clear: "both", paddingBottom: "2em" }}
                    ref={messagesEndRef}
                    >
                   <i>
                   is typing
                   </i>
                    </div>
                </List>
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
        {isMobile ? (
                <div>
                <SwipeableDrawer
                    anchor="right"
                    open={drawer}
                    onClose={() => setDrawer(false)}
                    onOpen={() => setDrawer(true)}
                >
                    <div className={classes.mobileUserList} role="presentation">
                    <List
                        dense
                        subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Users:
                        </ListSubheader>
                        }
                    >
                        
                        <div >
                            <ListItem>
                            <ListItemText  />
                            </ListItem>
                            <Divider component="li" />
                        </div>
                    </List>
                    </div>
                </SwipeableDrawer>
                </div>
            ):(
                <ExpansionPanel
                
                defaultExpanded={true}
            >
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="currentuserpanel-content"
                    id="currentuserpanel-header"
                    >
                        <Typography >Users:</Typography>
                    </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <List dense>
                </List>
                </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        }
        
    </div>

       ):(<Load/>)
}