import React, { ReactElement } from 'react'
import { Box, Card, Avatar, Grid, CardContent, Button, TextField} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
interface Props {
    
}

export default function CreatePost({}: Props): ReactElement {

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
                <Box  sx={{ width: '70%' }} m={1} >
                    <Card>
                    <CardContent>
                        <Box display="flex">
                            <Avatar aria-label="recipe">R</Avatar>
                            <Box>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                Bạn nghĩ gì vậy ?
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Tạo bài viết"}</DialogTitle>
                                    <Box width="70%">
                                    <Avatar aria-label="recipe">R</Avatar>
                                    <form>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            />
                                       {file?
                                       ( <>
                                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(file)} />
                                            <br/>
                                         </>
                                        ):
                                        ('')
                                        }

                                        <input type='file' onChange={handleChange}></input>
                                        <Button onClick={uploadFile} color="primary">
                                            Disagree
                                        </Button>
                                    </form>
                                    </Box>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Disagree
                                </Button>
                                <Button onClick={handleClose} color="primary" autoFocus>
                                    Agree
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </Box>
                           
                        </Box>
                        <Box>
                            <Button variant="contained"color="default" startIcon={<CloudUploadIcon />}>Upload</Button>
                            <Button variant="contained"color="default" startIcon={<CloudUploadIcon />}>Upload</Button>
                            <Button></Button>
                        </Box>
                    </CardContent>

                    </Card>

                </Box>
           </Grid>
       </Box>
    )
}
