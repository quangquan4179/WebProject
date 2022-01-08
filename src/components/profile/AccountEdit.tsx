import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AuthStore from '../../shared/authStore/AuthStore';
import { firstChar } from '../../shared/functions/sliceName';
import { Dialog,DialogTitle, List , Divider, ListItemText,ListItem} from '@material-ui/core';
import uploadAvatar from '../../shared/functions/uploadAvatar';
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
        buttonChangeAvt: {
            border: 0,
            backgroundColor: 'transparent',
            color: 'rgba(var(--d69,0,149,246),1)',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '18px',
            cursor: 'pointer',
            padding: 0,
        },
        name: {
            fontSize: '20px',
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

export default function AccountEdit() {
    const classes = useStyles();
    const [open,setOpen]=useState(false);
    const [file, setFile] = React.useState<File>()
    const userId = Number(localStorage.getItem('userId'));
    const handleOpen =()=>{
        setOpen(true);
    }
    const handleClose =()=>{
        setOpen(false);
    }
    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (!fileList) return;
        setFile(fileList[0]);
    }
    const uploadFile = async (e: any) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            uploadAvatar(file,userId);
            setOpen(false);

        }



    }
    return (
        <div className={classes.root}>
            <div className={classes.changeAvt}>
                <div className={classes.avatar}>
                    <Avatar src={AuthStore.user.photoURL!==null?(AuthStore.user.photoURL):(undefined)}>{firstChar(AuthStore.user.username)}</Avatar>
                </div>
                <div className={classes.nameAndButton}>
                    <div className={classes.name}>{AuthStore.user.username}</div>
                    <button className={classes.buttonChangeAvt} onClick={handleOpen}>Change Profile Photo</button>
                </div>
            </div>
            <div className={classes.fromInfo}>
                <form>
                    <div className={classes.form}>
                        <div className={classes.label}>Username</div>
                        <div className={classes.inputDiv}>
                            <input type="text" className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.label}>Email</div>
                        <div className={classes.inputDiv}>
                            <input type="text" className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.label}></div>
                        <div className={classes.inputDiv}>
                            <button className={classes.submitButton}>Thay đổi</button>
                        </div>
                    </div>
                </form>
            </div>
            <Dialog open={open}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">Change Profile Photo</DialogTitle>
        <div >
          <List>
            <Divider />
            
              <form onSubmit={uploadFile}>
              {file ? (<div style={{marginTop: '10px'}}>
                        <img alt="not fount" width={"550px"} src={URL.createObjectURL(file)} />
                                                <br />
                        </div>) : ('')}
                   <input type='file'  id="input-file"  onChange={handleChangeFile}></input>
                   <button type='submit'>Upload</button>
              </form>
          </List>
        </div>

      </Dialog>
        </div>
    );
}