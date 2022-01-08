import React, { useEffect, useContext, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '64px',
            padding: '80px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fafafa',
        },
        container: {
            width: '50%',
        },
        header: {
            color: '#262626',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '20px',
        },
        cardUser: {
            padding: '8px 16px',
            backgroundColor: 'white',
            border: '1px solid transparent',
            borderRadius: '4px',
            marginBottom: '20px',
        },
        itemUser: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '15px',
        },
        itemUserInfo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemUserInfoAvt: {
            height: '44px',
            width: '44px',
            marginRight: '5px'
        },
        itemUserInfoName: {
            // overflow: 'hidden',
            // whiteSpace: 'nowrap',
            // textOverflow: 'ellipsis',
        },
        followBtn: {
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '18px',
            textDecoration: 'none',
            backgroundColor: '#0095f6',
            border: '1px solid transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',
            padding: '5px 9px',
            cursor: 'pointer',
            borderRadius: '4px',
            height: '70%',
            margin: ' auto 0',
            // color: '#0095f6',
            // padding: 0,
            // minWidth: 'auto',
        },
        followingBtn: { // button khi follow rùi nhé
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '18px',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            border: '1px solid #dbdbdb',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000',
            padding: '5px 9px',
            cursor: 'pointer',
            borderRadius: '4px',
            height: '70%',
            margin: ' auto 0',
        }
    }),
);
export default function ListUserFull() {
    const [follow, setFollow] = useState();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.header}>
                    Suggested
                </div>
                <div className={classes.cardUser}>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 1</div>
                        </div>
                        <div className={classes.followingBtn}>
                            Following
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 2</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 3</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 4</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 1</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 2</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 3</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 4</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 1</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 2</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 3</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                            <div className={classes.itemUserInfoName}>Tên thằng 4</div>
                        </div>
                        <div className={classes.followBtn}>
                            Follow
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}