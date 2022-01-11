import React, { ReactElement, useContext, useState } from 'react'
import { Box, Card, Avatar, Button, TextField, DialogContent , CircularProgress } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Data, Nullable, User } from '../../shared/interfaces'
import { firstChar } from '../../shared/functions/sliceName'
// import PostStore from '../../stores/PostStore'
// import Pusher from 'pusher-js';
import uploadImage from '../../shared/functions/uploadImage'
// import { PusherContext } from '../../shared/pusher/Pusher';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

interface Props {
    data: User;
}
export default function CreatePost(props: Props): ReactElement {
    // Pusher.logToConsole = true;
    // const pusher = useContext(PusherContext)
    const userId = localStorage.getItem('userId');
    const [content, setContent] = useState('');
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState<File>()

    //loading
    const [isSubmiting, setSubmiting] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setFile(undefined);
        setContent('');
    };
    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (!fileList) return;
        setFile(fileList[0]);
    }
    const uploadFile = async (e: any) => {
        e.preventDefault();
        setSubmiting(true)
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            try {
                const res = await uploadImage(file, content);
                setOpen(false);
            } catch (error) {
                console.log("🚀 ~ file: CreatePost.tsx ~ line 47 ~ uploadFile ~ error", error)
            }
            setSubmiting(false)
        }


    }
    const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    return (
        <div style={{ width: '100%', marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '100%', padding: '20px 40px', display: 'flex', justifyContent: 'center', margin: '8px', boxShadow: 'none', border: '1px solid #dbdbdb', borderRadius: '3px', }}>
                <div style={{ width: '10%' }}>
                    <Avatar aria-label="recipe" src={props.data.photoURL!==null?(props.data.photoURL):(undefined)}>{firstChar(props.data?.username)}</Avatar>
                </div>
                <div style={{ width: '90%' }}>
                    <Box>
                        <Button variant="outlined" onClick={handleClickOpen} style={{ width: '100%', borderRadius: '15px', opacity: '0.7' }}>
                            {props.data?.username} ơi, Bạn nghĩ gì vậy ?
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            fullWidth
                            maxWidth="sm"
                        >
                            <DialogTitle id="alert-dialog-title" style={{ display: "flex", justifyContent: 'center' }}>
                                <h2>
                                    {"Tạo bài viết"}
                                </h2>
                            </DialogTitle>
                            <DialogContent>
                                <Box width="100%">
                                    <form onSubmit={uploadFile}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            fullWidth
                                            name="content"
                                            onChange={handleChangeContent}
                                        />
                                        {file ?
                                            (<div style={{marginTop: '10px'}}>
                                                <img alt="not fount" width={"550px"} src={URL.createObjectURL(file)} />
                                                <br />
                                            </div>
                                            ) :
                                            ('')
                                        }
                                        {!file ?
                                            (<>
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                    style={{ marginTop: '10px' }}
                                                >
                                                    <AddPhotoAlternateIcon />
                                                    <input type='file' onChange={handleChangeFile} id="input-file" hidden></input>
                                                </Button>
                                            </>
                                            ) :
                                            ('')
                                        }

                                        {isSubmiting ? <CircularProgress/> :
                                        <Button variant="contained" style={{ width: '100%', marginTop: '10px' }} type="submit" >Đăng lên</Button>}

                                    </form>

                                </Box>

                            </DialogContent>
                        </Dialog>
                    </Box>
                </div>
            </Card>
        </div>
    )
}
