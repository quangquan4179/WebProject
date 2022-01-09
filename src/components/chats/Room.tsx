import React, { ReactElement, useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Avatar, Button} from '@material-ui/core'
import { Messages, Room } from '../../shared/interfaces';
import { firstChar } from '../../shared/functions/sliceName';
import ChatStore from '../../stores/ChatStore';
import { observer } from 'mobx-react-lite';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatMessageWindow: {
      flex: "1",
      fontSize: "16px",

      overflowY: "auto",
    },
    chatMessageWrapper: {
      // display: "flex",
      // flexDirection: "column",
      height: 'calc(100% - 220px)',
      position: "relative",
    },
    chatHeader: {
      display: "flex",
      height: 60,
      borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)',
      alignItems: "center",
      padding: '0 20px',
      position: "sticky",
      top: 0,
      zIndex:2,
      backgroundColor: '#fff'
    },
    chatFooter: {
      zIndex: 2,
      backgroundColor: '#fff',
      width: 'calc(100% - 60px)',
      height: '44px',
      position: 'absolute',
      bottom: '0px',
      display: 'flex',
      alignItems: 'center',
      margin: '20px',
      fontSize: '16px',
      justifyContent: 'space-between',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '22px',
      paddingLeft: '11px',
      paddingRight: '8px',
    },
    chatInput: {
      width: '100%',
      border: '0',
      '&:focus': {
        outline: '0'
      }
    },
    chatButton: {
      cursor: 'pointer',
      marginRight: '5px',
      color: 'rgba(var(--d69,0,149,246),1)'
    },
    chatMesList: {
      display: 'block',
      paddingBottom: "84px",
    },
    chatMesItemLeft: {
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(var(--b6a,219,219,219),1)',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '22px',
      marginBottom: '5px',
      padding: '16px',
      width: 'fit-content',
    },
    chatMesItemRight: {
      margin: '1rem 1rem 1rem auto',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(var(--b6a,219,219,219),1)',
      border: '1px solid rgba(var(--b6a,219,219,219),1)',
      borderRadius: '22px',
      marginBottom: '5px',
      padding: '16px',
      width: 'fit-content',
    }
  }),
);
interface Props {
  data:Room
    
}

function RoomCpn(props: Props): ReactElement {
  const [messages,setMessages]=useState('');
 
  const userId=Number(localStorage.getItem('userId'))
 

  const handleChange =(e:any)=>(
    setMessages(e.target.value)
  )
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    ChatStore.postMes(messages,props.data.id);
    setMessages('');
  }
    const classes = useStyles();
    return (
        <div className={classes.chatMessageWindow}>
            <div className={classes.chatHeader}>
              <Avatar aria-label="recipe" style={{ width: 24, height: 24, marginRight: 20 }}>{firstChar(props.data?.name)}</Avatar>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{props.data?.name}</div>
            </div>
            <div className={classes.chatMessageWrapper}>
              <div className={classes.chatMesList}>

                {props.data.messages.map((messages:Messages,index:number)=>
                  messages.user_id===userId?(
                    <div className={classes.chatMesItemRight} key={index}>
                    {messages.message}
                  </div>
                  ):(
                    <div className={classes.chatMesItemLeft} key={index}>
                   {messages.message}
                </div>
                  )
                )
                }
              </div>
              
            </div>
            <div className={classes.chatFooter}>
              <form onSubmit={handleSubmit}>
                <input placeholder="Message . . ." className={classes.chatInput}  value={messages} onChange={handleChange}/>
                <Button className={classes.chatButton} type="submit">Send</Button>
              </form>
             
            </div>

          </div>
    )
}
export default observer(RoomCpn);