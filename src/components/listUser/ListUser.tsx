import React, { useEffect } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import ListUserStore from '../../stores/ListUserStore';
import { User } from '../../shared/interfaces';
import { firstChar } from '../../shared/functions/sliceName';
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
            width: '32px',
            marginRight: '5px'
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
 function ListUser() {
    const classes = useStyles();
    const handleClick=(userId:number)=>{
        ListUserStore.postFollow(userId);
    }
    useEffect(()=>{
        const userId = Number(localStorage.getItem('userId'))
        ListUserStore.mergeUserNoneFollow(userId);
    },[])
    return (
        <div className={classes.root}>
            <div className={classes.headerRow}>
                <div>
                    Suggestions For You
                </div>
                <Link to='/explore/people' className={classes.headerRowLink}>
                    See All
                </Link>
            </div>
            {ListUserStore.usersNoneFollow.length===1?(
                <div className={classes.itemUser}>
                <div className={classes.itemUserInfo}>
                    <Avatar className={classes.itemUserInfoAvt} src={ListUserStore.usersNoneFollow[0].photoURL!==null?(ListUserStore.usersNoneFollow[0].photoURL):(undefined)}>{firstChar(ListUserStore.usersNoneFollow[0].username)}</Avatar>
                    <div className={classes.itemUserInfoName}>{ListUserStore.usersNoneFollow[0].username}</div>
                </div>
                <Button className={classes.followBtn} onClick={()=>handleClick(ListUserStore.usersNoneFollow[0].id)}>
                    Follow
                </Button>
            </div>
            ):(
                ListUserStore.usersFollowed.length<5?(
                    ListUserStore.usersNoneFollow.map((user:User,index)=>(
                        <div className={classes.itemUser} key={index}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt}src={user.photoURL!==null?(user.photoURL):(undefined)}>{firstChar(user.username)}</Avatar>
                            <div className={classes.itemUserInfoName}>{user.username}</div>
                        </div>
                        <Button className={classes.followBtn} onClick={()=>handleClick(user.id)}>
                            Follow
                        </Button>
                    </div>
                    
                        ))
                ):(
                    <>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt} src={ListUserStore.usersNoneFollow[0].photoURL!==null?(ListUserStore.usersNoneFollow[0].photoURL):(undefined)}>{firstChar(ListUserStore.usersNoneFollow[0].username)}</Avatar>
                            <div className={classes.itemUserInfoName}>{ListUserStore.usersNoneFollow[0].username}</div>
                        </div>
                        <Button className={classes.followBtn} onClick={()=>handleClick(ListUserStore.usersNoneFollow[0].id)}>
                            Follow
                        </Button>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt} src={ListUserStore.usersNoneFollow[1].photoURL!==null?(ListUserStore.usersNoneFollow[1].photoURL):(undefined)}>{firstChar(ListUserStore.usersNoneFollow[1].username)}</Avatar>
                            <div className={classes.itemUserInfoName}>{ListUserStore.usersNoneFollow[1].username}</div>
                        </div>
                        <Button className={classes.followBtn} onClick={()=>handleClick(ListUserStore.usersNoneFollow[1].id)}>
                            Follow
                        </Button>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt} src={ListUserStore.usersNoneFollow[2].photoURL!==null?(ListUserStore.usersNoneFollow[2].photoURL):(undefined)}>{firstChar(ListUserStore.usersNoneFollow[2].username)}</Avatar>
                            <div className={classes.itemUserInfoName}>{ListUserStore.usersNoneFollow[2].username}</div>
                        </div>
                        <Button className={classes.followBtn} onClick={()=>handleClick(ListUserStore.usersNoneFollow[2].id)}>
                            Follow
                        </Button>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt} src={ListUserStore.usersNoneFollow[3].photoURL!==null?(ListUserStore.usersNoneFollow[3].photoURL):(undefined)}>{firstChar(ListUserStore.usersNoneFollow[3].username)}</Avatar>
                            <div className={classes.itemUserInfoName}>{ListUserStore.usersNoneFollow[3].username}</div>
                        </div>
                        <Button className={classes.followBtn} onClick={()=>handleClick(ListUserStore.usersNoneFollow[3].id)}> 
                            Follow
                        </Button>
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserInfo}>
                            <Avatar className={classes.itemUserInfoAvt} src={ListUserStore.usersNoneFollow[4].photoURL!==null?(ListUserStore.usersNoneFollow[4].photoURL):(undefined)}>{firstChar(ListUserStore.usersNoneFollow[4].username)}</Avatar>
                            <div className={classes.itemUserInfoName}>{ListUserStore.usersNoneFollow[4].username}</div>
                        </div>
                        <Button className={classes.followBtn}onClick={()=>handleClick(ListUserStore.usersNoneFollow[4].id)} >
                            Follow
                        </Button>
                    </div>
                    </>
                    
                )
               
            )}
            
        </div>
    );
}
export default observer(ListUser)