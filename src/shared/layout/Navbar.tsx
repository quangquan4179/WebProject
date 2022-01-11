import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InputBase from '@material-ui/core/InputBase';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import AuthStore from '../authStore/AuthStore';
import Avatar from '@material-ui/core/Avatar';
// import Tooltip from '@material-ui/core/Tooltip';
import { Box, Divider, Paper, Fade } from '@material-ui/core'
import { firstChar } from '../functions/sliceName'
import { Data, Nullable } from '../interfaces'
import { Link } from 'react-router-dom'
import logo from './../../img/logo.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      // backgroundColor: alpha(theme.palette.common.white, 0.15),
      // '&:hover': {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
      // },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      minWidth: '125px',
      border: '0',
      backgroundColor: '#efefef',
      borderRadius: '8px',
      color: '#8e8e8e',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    navbarStyle: {
      top: '0px !important',
      backgroundColor: '#fff',
      color: '#000',
      padding: '0 15%',
      zIndex: 10,
      boxShadow: 'none',
      borderBottom: '1px solid #dbdbdb',
    },
    buttonCustom: {
      "&:hover": {
        backgroundColor: 'inherit',
        opacity: 0.5,
      }
    },
    dropdownMenu: {
      marginTop: '40px',
    },
    tableDropdown: {
      backgroundColor: '#fff',
      borderBottom: '1px solid transparent',
      borderRadius: '6px',
      boxShadow: '0 0 5px 1px rgb(0 0 0 / 10%)',
      width: '230px',
      position: 'absolute',
      left: '-300%',
      marginTop: '-5px',
    },
    itemMenu: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '8px 16px',
      '&:hover': {
        backgroundColor: '#fafafa'
      },
      '&:active': {
        backgroundColor: '#fafafa'
      },
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#262626',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      alignItems: 'center',
    },
    itemMenuLabel: {
      marginLeft: '10px',
    },
    gocnhon: {
      position: 'absolute',
      transform: 'rotate(45deg)',
      width: '14px',
      backgroundColor: 'red',
      zIndex: 1000,
      marginTop: '-7px',
    },
  }),
);

interface NavBarProps {
  data?: Nullable<Data>
}
export default function NavBar(props: NavBarProps) {

  const { data } = props
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleChangeChat = () => {
    window.location.reload();
    // setChecked((prev) => !prev);
  };
  const handleChangeProfile = () => {
    
    setChecked((prev) => !prev);
    // window.location.reload();
  };
  const handleSignOut = () => {
    AuthStore.signout()
    window.location.reload();
  }
  const handleClickAway = () => {
    setChecked(false);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    // <ClickAwayListener onClickAway={handleClickAway}>
      
    // </ClickAwayListener>
    <Fade in={checked} style={{ position: 'absolute' }}>
      <div style={{ position: 'relative' }}>
        {/* <div className={classes.gocnhon}></div> */}
        <div className={classes.tableDropdown}>
          <Link to='/profile' className={classes.itemMenu} onClick={handleChangeProfile}>
            <AccountCircleIcon />
            <div className={classes.itemMenuLabel}>Profile</div>
          </Link>
          <Link to='/account/edit' className={classes.itemMenu} onClick={handleChangeProfile}>
            <SettingsIcon />
            <div className={classes.itemMenuLabel}>Settings</div>
          </Link>
          <div className={classes.itemMenu} style={{ borderTop: '2px solid #dbdbdb' }} onClick={handleSignOut}>Log Out</div>
        </div>
      </div>
    </Fade>
  );


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbarStyle}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Link to='/'>
              <img src={logo} alt='yume-logo' style={{ height: '60px' }} />
            </Link>
          </Box>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" className={classes.buttonCustom}>
              <Link to='/' style={{ color: '#000', padding: '0' }}>
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit" className={classes.buttonCustom} onClick={handleChangeChat}>
              <Link to='/inbox' style={{ color: '#000', padding: '0' }}>
                {/* <Badge badgeContent={4} color="primary">
                </Badge> */}
                <ForumIcon />
              </Link>
            </IconButton>
            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleChange}
                color="inherit"
              >
                <Avatar src={data?.photoURL} >{firstChar(data?.username)}</Avatar>
              </IconButton>
              {renderMenu}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
