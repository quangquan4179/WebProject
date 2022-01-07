import React, { ReactElement } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Avatar} from '@material-ui/core'
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
    
}

function Room({}: Props): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.chatMessageWindow}>
            <div className={classes.chatHeader}>
              <Avatar aria-label="recipe" style={{ width: 24, height: 24, marginRight: 20 }}>DL</Avatar>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Duy Linh</div>
            </div>
            <div className={classes.chatMessageWrapper}>
              <div className={classes.chatMesList}>
                <div className={classes.chatMesItemLeft}>
                  trái
                </div>
                <div className={classes.chatMesItemLeft}>
                  trái
                </div>
                <div className={classes.chatMesItemLeft}>
                  trái
                </div>
                <div className={classes.chatMesItemRight}>
                  phải
                </div>
                <div className={classes.chatMesItemLeft}>
                  trái
                </div>
                <div className={classes.chatMesItemRight}>
                  phải
                </div>
                <div className={classes.chatMesItemLeft}>
                  trái
                </div>
                <div className={classes.chatMesItemRight}>
                  phải
                </div>
                <div className={classes.chatMesItemLeft}>
                  trái
                </div>
                <div className={classes.chatMesItemRight}>
                  phải
                </div>
              </div>
              {/* <div style={{position: 'absolute', float: "left", clear: "both", bottom: "5px" }}>
                <i>User is typing</i>
              </div> */}
            </div>
            <div className={classes.chatFooter}>
              <input placeholder="Message . . ." className={classes.chatInput} />
              <div className={classes.chatButton}>send</div>
            </div>

          </div>
    )
}
export default Room