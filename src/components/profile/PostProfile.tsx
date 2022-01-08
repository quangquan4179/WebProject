import React, { ReactElement, useState } from 'react'
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Modal, Avatar, Button } from '@material-ui/core';
import { Comment, PostInterface } from '../../shared/interfaces';
import ProfileStore from '../../stores/ProfileStore';
import { observer } from 'mobx-react-lite';
import { firstChar } from '../../shared/functions/sliceName';
interface Props {
    data: PostInterface
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{

        },
        postItem: {
            padding: '20px',
            fontSize: '30px',
            textAlign: 'center',
            width: '293px', 
            height: '293px',
        },
        headerComment: {
            height: '32px',
            position: 'relative',
            top: 0,
            display: 'flex',
            backgroundColor: '#fff',
            width: 'auto',
            padding: '14px 16px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)',
        },
        bodyComment: {
            height: 'calc(100% - 124px)',
            position: "relative",
        },
        footerComment: {
            zIndex: 2,
            backgroundColor: '#fff',
            width: 'auto',
            height: '40px',
            bottom: '0px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(var(--b6a,219,219,219),1)',
            padding: '11px 16px',
            '& form': {
                display: 'flex',
                width: '100%',
            },
        },
        commentItem: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '14px 16px'
        },
        avatar: {
            backgroundColor: 'red[500]',
            marginRight: '5px',
        },
        commentInput: {
            width: '100%',
            border: '0',
            '&:focus': {
                outline: '0'
            },
        },
        commentButton: {
            marginRight: '5px',
            cursor: 'pointer',
            color: 'rgba(var(--d69,0,149,246),1)',
            border: 0,
            backgroundColor: 'transparent',
        },

    })
)
function PostProfile(props: Props): ReactElement {

    const [open, setOpen] = useState(false)
    const handleOpen = async () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await ProfileStore.postComment(comment, Number(props.data.id));
        setComment('');
    }

    const [comment, setComment] = React.useState('')
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.postItem} onClick={handleOpen} >
                <img src={props.data.photoURL} alt="" style={{objectFit: 'cover' , width: '100%', height: '100%' }} />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                style={{ display: 'flex' }}
            >
                <div style={{
                    width: '70%', height: '90vh', display: 'flex',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', backgroundColor: '#fff'
                }}>
                    <div style={{ width: '65%' }}>
                        <img src={props.data.photoURL} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div style={{ width: '35%' }}>
                        <div className={classes.headerComment}>
                            <div>
                                <Avatar aria-label="recipe" className={classes.avatar} src={props.data.user.photoURL != null ? (props.data.user.photoURL) : (undefined)}>
                                    {firstChar(props.data.user.username)}
                                </Avatar>
                            </div>
                            <div>Tên</div>
                        </div>
                        <div className={classes.bodyComment}>
                            {props.data.comments.map((cmt: Comment, index: number) => {
                                return (
                                    <div className={classes.commentItem} key={index}>
                                        <div>
                                            <Avatar src={cmt.user.photoURL != null ? (cmt.user.photoURL) : (undefined)} aria-label="recipe" className={classes.avatar} style={{ width: '30px', height: '30px', fontSize: '16px' }}>
                                                {firstChar(cmt.user.username)}
                                            </Avatar>
                                        </div>
                                        <div>
                                            <span style={{ fontWeight: 500, color: 'black', marginRight: '5px' }}>{cmt.user.username}</span>
                                            <span>
                                                {cmt.comment}
                                            </span>
                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                        <div className={classes.footerComment}>
                            <form onSubmit={handleSubmit}>
                                <input placeholder="Add a comment . . ." className={classes.commentInput} onChange={handleChangeComment} type="text" value={comment} />
                                <Button className={classes.commentButton} type="submit" >Post</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default observer(PostProfile)