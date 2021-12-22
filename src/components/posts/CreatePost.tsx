import React, { ReactElement } from 'react'
import { Box, Card, Avatar, Grid, CardContent, Button, TextField, DialogContent } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Data, Nullable } from '../../shared/interfaces'
import { firstChar } from '../../shared/functions/sliceName'
import PostStore from '../../stores/PostStore'
interface Props {
    data?: Nullable<Data>
}
export default function CreatePost(props: Props): ReactElement {
    const userId = localStorage.getItem('userId');
    const [content, setContent] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState<File>()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (!fileList) return;
        setFile(fileList[0]);
    }
    const uploadFile = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        if (file) {
            const formData = new FormData();
            formData.append("image", file, file.name);
            PostStore.createPost(content,formData,Number(userId));
        }
    }
    const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }
    
    return (
        <div>
            <Box sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '45%', padding: '20px 40px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '10%' }}>
                        <Avatar aria-label="recipe">{firstChar(props.data?.username)}</Avatar>
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
                                        <form>
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
                                                (<>
                                                    <img alt="not fount" width={"550px"} src={URL.createObjectURL(file)} />
                                                    <br />
                                                </>
                                                ) :
                                                ('')
                                            }
                                            <Button
                                                variant="contained"
                                                component="label"
                                                style={{ width: '100%', marginTop: '10px' }}
                                            >
                                                Tải ảnh
                                                <input type='file' onChange={handleChangeFile} id="input-file" hidden></input>
                                            </Button>
                                            <Button type="submit" onClick={uploadFile}>Đăng lên</Button>
                                        </form>
                                    </Box>
                                    {/* </DialogContentText> */}
                                </DialogContent>

                                <DialogActions>
                                    <Button onClick={handleClose} style={{ color: 'gray' }}>
                                        Cancel
                                    </Button>
                                    <Button onClick={handleClose} style={{ color: 'gray' }} autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </div>
                </Card>
            </Box>
        </div>
    )
}
