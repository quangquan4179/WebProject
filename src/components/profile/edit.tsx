import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AccountEdit from './AccountEdit'
import ChangePassword from './ChangePassword'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '65%',
            margin: '104px auto 0 auto',
            border: '1px solid rgba(var(--b6a,219,219,219),1)',
            borderRadius: '5px',
            height: '70vh',
            fontSize: '16px',
        },
        userView: {
            width: '75%',
            borderLeft: '1px solid rgba(var(--b6a,219,219,219),1)',
        },
        sideBar: {
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            flexƯrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'stretch',
        },
        sideBarItem: {
            padding: '20px',
            cursor: 'pointer',
            borderLeft: 'solid 2px white',
            '&:hover': {
                backgroundColor: 'rgba(var(--b6a,219,219,219),1)',
                borderLeft: 'solid 2px gray',
            }
        },
        sideBarItemChoose: {
            padding: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderLeft: 'solid 2px black',
        }
    }),
);

export default function EditProfile() {
    const classes = useStyles();
    const [isChoose, setChoose] = useState(1);
    const chooseItem = (item: number) => {
        setChoose(item);
        console.log(isChoose);
    };

    return (
        <div className={classes.root}>
            <div className={classes.sideBar}>
                <div className={isChoose == 1 ? classes.sideBarItemChoose : classes.sideBarItem} onClick={() => chooseItem(1)} >Edit Profile</div>
                <div className={isChoose == 2 ? classes.sideBarItemChoose : classes.sideBarItem} onClick={() => chooseItem(2)} >Change Password</div>
                <div className={isChoose == 3 ? classes.sideBarItemChoose : classes.sideBarItem} onClick={() => chooseItem(3)} >Log Out</div>
            </div>
            <div className={classes.userView}>
                {isChoose == 1 && <AccountEdit />}
                {isChoose == 2 && <ChangePassword />}
            </div>
        </div>
    );
}