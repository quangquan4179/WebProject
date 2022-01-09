import React, { useEffect } from 'react'
import CreatePost from '../../posts/CreatePost';
import PostGrid from '../../posts/PostGrid';
import { observer } from "mobx-react-lite";
import AuthStore from '../../../shared/authStore/AuthStore'
import ListUser from '../../listUser/ListUser';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '65%', display: 'flex', justifyContent: 'center', margin: 'auto'
        },
        listUserContainer: {
            marginTop: '64px', position: 'fixed', display: 'flex', justifyContent: 'space-between'
        },
    }),
);
const Home = () => {
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        Promise.all([AuthStore.getUser(Number(userId))])

    }, [])
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div style={{ width: '75%' }}>
                    <CreatePost data={AuthStore.user} />
                    <PostGrid />
                </div>
                <div style={{ width: '25%', marginTop: '64px' }}>
                    <div className={classes.listUserContainer}>
                        <ListUser />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default observer(Home);