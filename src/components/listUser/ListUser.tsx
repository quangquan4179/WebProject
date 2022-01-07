import React, { useEffect, useContext } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 240,
            width: 240,
        },
        headerRow: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            color: '#8e8e8e',
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '18px',
            padding: '8px 16px',
        },
        headerRowLink: {
            color: '#262626',
            fontWeight: 600,
            fontSize: 12,
            lineHeight: '18px',
            textDecoration: 'none',
        },
        itemUser: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '8px 16px',
        },
        itemUserInfo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemUserInfoAvt: {
            height: '32px',
            width: '32px'
        },
        itemUserInfoName:{
            width: '150px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
        followBtn: {
            textTransform: 'none',
            fontSize: 12,
            lineHeight: '16px',
            textDecoration: 'none',
            color: '#0095f6',
            padding: 0,
            minWidth: 'auto',
        }
    }),
);
export default function ListUser() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.headerRow}>
                <div>
                    Suggestions For You
                </div>
                <Link to='/' className={classes.headerRowLink}>
                    See All
                </Link>
            </div>
            <div className={classes.itemUser}>
                <div className={classes.itemUserInfo}>
                    <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                    <div className={classes.itemUserInfoName}>Tên thằng 1 thằng 1 thằng 1</div>
                </div>
                <Button className={classes.followBtn}>
                    Follow
                </Button>
            </div>
            <div className={classes.itemUser}>
                <div className={classes.itemUserInfo}>
                    <Avatar className={classes.itemUserInfoAvt}>O</Avatar>
                    <div className={classes.itemUserInfoName}>Tên thằng 2</div>
                </div>
                <Button className={classes.followBtn}>
                    Follow
                </Button>
            </div>
        </div>
    );
}