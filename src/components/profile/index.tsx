import React,{ useEffect } from 'react';
import { makeStyles, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import GridOnIcon from '@material-ui/icons/GridOn';
import { Grid, Modal } from '@material-ui/core';
import PostProfile from './PostProfile';
import ProfileStore from '../../stores/ProfileStore';
import AuthStore from '../../shared/authStore/AuthStore';
import { observer } from 'mobx-react-lite';
import { PostInterface } from '../../shared/interfaces';
import { firstChar } from '../../shared/functions/sliceName';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: '64px',
        },
        profileMain: {
            width: '65%',
            margin: '0 auto',
            padding: '30px 20px 0 20px',
        },
        profileHeader: {
            display: 'flex',
            // backgroundColor: '#ff1',
            height: '150px',
            paddingBottom: '44px',
            borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)',
        },
        profileBody: {

        },
        profileAvatar: {
            width: '33%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '30px',
        },
        profileInfo: {
            width: '30%',
            display: 'block',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        profileInfoName: {
            display: 'flex',
            width: '50%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontWeight: 300,
            fontSize: '28px',
            lineHeight: '32px',
            alignItems: 'flex-end'
        },
        profileInfoEdit: {
            boxSizing: 'border-box',
            marginLeft: '20px',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            border: '1px solid rgba(var(--ca6,219,219,219),1)',
            color: 'rgba(var(--f75,38,38,38),1)',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'block',
            fontWeight: 600,
            padding: '5px 9px',
            textAlign: 'center',
            textTransform: 'inherit',
            textOverflow: 'ellipsis',
        },
        profileInfoFriend: {
            fontSize: '16px',
            // marginRight: '40px'
        },
        listPost: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            padding: '10px',
        }
        
       
       
    }));
 function Profile() {
    const classes = useStyles();
     useEffect(() => {
        const userId = localStorage.getItem('userId');
        ProfileStore.getAllMyPosts(Number(userId));
        ProfileStore.getFollow(Number(userId));
        ProfileStore.getFollowed(Number(userId));
     }, [])
    return (
        <div className={classes.container}>
            <div className={classes.profileMain}>
                <div className={classes.profileHeader}>
                    <div className={classes.profileAvatar}>
                        <Avatar src={AuthStore.user?(AuthStore.user?.photoURL):(undefined)} style={{
                            width: '150px', height: '150px', display: ' block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>{firstChar(AuthStore.user?.username)}</Avatar>
                    </div>
                    <div className={classes.profileInfo}>
                        <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-between' }}>
                            <div className={classes.profileInfoName}>{AuthStore.user?.username}</div>
                            <Link to='/account/edit' className={classes.profileInfoEdit}>button edit</Link>
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-between' }}>
                            <div className={classes.profileInfoFriend}>{ProfileStore.myPosts.length} post</div>
                            <div className={classes.profileInfoFriend}>{ProfileStore.followed.length} follower</div>
                            <div className={classes.profileInfoFriend}>{ProfileStore.follow.length} following</div>
                        </div>
                    </div>
                </div>
                <div className={classes.profileBody}>
                    <div style={{ display: 'flex', width: 'auto', marginBottom: '20px', justifyContent: 'center', padding: '20px', borderTop: '1px solid' }}>
                        <GridOnIcon />
                        <span style={{ marginLeft: '5px' }}>POST</span>
                    </div>
                    <div className={classes.listPost}>
                       {ProfileStore.myPosts.map((post:PostInterface,index:number)=>{
                           return(<PostProfile data={post} key={index}/>)
                       })}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default observer(Profile);