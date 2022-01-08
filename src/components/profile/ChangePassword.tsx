import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AuthStore from '../../shared/authStore/AuthStore';
import { firstChar } from '../../shared/functions/sliceName';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '30px'
        },
        changeAvt: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar: {
            width: '20%',
            display: 'flex',
            justifyContent: 'flex-end',
            // marginRight: '10px',
            paddingRight: '22px',
        },
        nameAndButton: {
            width: '80%',
        },
        name: {
            fontSize: '24px',
            lineHeight: '22px',
            marginBottom: '2px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        fromInfo: {
            marginTop: '32px',
        },
        form: {
            display: 'flex',
            marginTop: '5px',
        },
        label: {
            width: '20%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '32px',
            color: '#262626',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '18px',
            textAlign: 'right',
            marginBottom: '16px',
        },
        inputDiv: {
            width: '80%',
            paddingRight: '60px',
            marginBottom: '16px',
        },
        input: {
            width: '90%',
            border: '1px solid rgba(var(--ca6,219,219,219),1)',
            borderRadius: '3px',
            color: '#262626',
            fontSize: '16px',
            height: '32px',
            padding: '0 10px',
            background: '#fafafa',
        },
        submitButton: {
            borderRadius: '4px',
            color: '#fff',
            fontWeight: 600,
            padding: '5px 9px',
            textAlign: 'center',
            textTransform: 'inherit',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            fontSize: '14px',
            lineHeight: '18px',
            border: '1px solid transparent',
            backgroundColor: 'rgba(var(--d69,0,149,246),1)',
        }
    }),
);

export default function ChangePassword() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.changeAvt}>
                <div className={classes.avatar}>
                <Avatar src={AuthStore.user.photoURL!==null?(AuthStore.user.photoURL):(undefined)}>{firstChar(AuthStore.user.username)}</Avatar>
                </div>
                <div className={classes.nameAndButton}>
                    <div className={classes.name}>{AuthStore.user.username}</div>
                </div>
            </div>
            <div className={classes.fromInfo}>
                <form>
                    <div className={classes.form}>
                        <div className={classes.label}>Old Password</div>
                        <div className={classes.inputDiv}>
                            <input type="text" className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.label}>New Password</div>
                        <div className={classes.inputDiv}>
                            <input type="text" className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.label}>Confirm password</div>
                        <div className={classes.inputDiv}>
                            <input type="text" className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.label}></div>
                        <div className={classes.inputDiv}>
                            <button className={classes.submitButton}>Change Password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}