import { Drawer, IconButton, List, ListItem } from '@material-ui/core'
import React, { ReactElement } from 'react'
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import BrightnessLowOutlinedIcon from "@material-ui/icons/BrightnessLowOutlined";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import AddChatRoomdialog from './AddChatRoomDialog'
import AddChatroomDialog from './AddChatRoomDialog';
import {Link} from 'react-router-dom'
interface Props {
    
}

const drawerWidth = 240;
const mobileDrawerWidth = 120;
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
  
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
  
      "@media (max-width: 600px)": {
        width: `calc(100% - ${mobileDrawerWidth}px)`,
        marginLeft: mobileDrawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
    appBarButtons: {
      justifyContent: "flex-end",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
  
      "@media (max-width: 600px)": {
        width: mobileDrawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
  
      "@media (max-width: 600px)": {
        width: mobileDrawerWidth,
      },
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
  
      "@media (max-width: 600px)": {
        marginLeft: -mobileDrawerWidth,
      },
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    navTitle: {
      flexGrow: 1,
    },
    addChatroomButton: {
      display: "flex",
      alignItems: "flex-end",
      flex: "1",
    },
    userAvatar: {
      border: "2px solid currentColor",
    },
  }));
export default function Dashboash({}: Props): ReactElement {
    const classes = useStyles();
    
    return (
       <>
        {/* <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton >
            
              <ChevronRightIcon />
          </IconButton>
        </div>

        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Available Chatrooms:
            </ListSubheader>
          }
        >
          <Divider />
         
            <div>
              <ListItem
              >
                <ListItemText  />
              </ListItem>
              <Divider />
            </div>
        </List>
        <div className={classes.addChatroomButton}>
          <AddChatroomDialog/>
        </div>
      </Drawer> */}
       <main
       className={clsx(classes.content, {
        //  [classes.contentShift]: open,
       })}
     >
       <div className={classes.drawerHeader} />
       <Link to="/inbox/:id"  />
     </main>
       </>
    )
}
