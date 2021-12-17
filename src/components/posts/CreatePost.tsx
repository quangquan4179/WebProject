import React, { ReactElement } from 'react'
import { Box, Card, Avatar, Grid, CardContent, Button, TextField, DialogContent} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Data, Nullable} from '../../shared/interfaces'
import {firstChar} from '../../shared/functions/sliceName'
interface Props{
  data?: Nullable<Data>
}
export default function CreatePost(props: Props): ReactElement {

    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState<File>()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const fileList = event.target.files;

        if (!fileList) return;
        setFile(fileList[0]);
        }
    const uploadFile =(e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        if (file) {
            const formData = new FormData();
            formData.append("image", file, file.name);
        }
    }
    return (
       <Box m={4}>
           <Grid container direction='row' justifyContent='center' alignItems='center' spacing={3} >
                <Box  sx={{ width: '50%' }} m={1} >
                    <Card>
                    <CardContent>
                        <Box display="flex">
                            <Avatar aria-label="recipe">{firstChar(props.data?.username)}</Avatar>
                            <Box>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{width: '550px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>
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
                                <DialogTitle id="alert-dialog-title">{"Tạo bài viết"}</DialogTitle>
                                <DialogContent>
                                    <Box width="100%">
                                        <Avatar aria-label="recipe">R</Avatar>
                                        <form>
                                            <TextField
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                fullWidth
                                                />
                                        {file?
                                        ( <>
                                                <img alt="not fount" width={"550px"} src={URL.createObjectURL(file)} />
                                                <br/>
                                            </>
                                            ):
                                            ('')
                                            }

                                            <input type='file' onChange={handleChange} id="input-file"></input>

                                        </form>
                                    </Box>
                                {/* </DialogContentText> */}
                                </DialogContent>
                                    
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleClose} color="primary" autoFocus>
                                    Agree
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </Box>
                           
                        </Box>
                        <Box>
                            <Button variant="contained"color="primary" startIcon={<CloudUploadIcon />} onClick={handleClickOpen} >Ảnh</Button>
                        </Box>
                    </CardContent>

                    </Card>

                </Box>
           </Grid>
       </Box>
    )
}
