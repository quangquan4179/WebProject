import { Button, Modal } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
interface Props {

}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatMessageWindow: {
      flex: "1",
      fontSize: "16px",
      overflowY: "auto",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    createRoomBtn: {
      textTransform: "none",
      backgroundColor: '#0095f6',
      color: '#fff',
      border: '1px solid transparent',
      fontSize: '14px',
      fontWeight: 600,
      padding: '5px 9px',
      '&:hover': {
        backgroundColor: '#0095f6',
        color: '#fff',
      }
    },
    modal: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalCreateRoom: {
      backgroundColor: '#fff',
      width: '30%',
      height: 'auto',
      borderRadius: '12px',
      marginTop: '-300px',
    },
    modalHeader: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #dbdbdb',
      height: '43px',
      padding: '0 16px',
    },
    modalTitle: {
      fontSize: '16px',
      fontWeight: 600,
    },
    modalButton: {
      color: '#0095f6',
      fontSize: '14px',
      lineHeight: '18px',
      cursor: 'pointer',
      fontWeight: 600,
    },
    modalBody: {
      display: 'flex',
      width: 'auto',
      // justifyContent: 'flex-start', 
      alignItems: 'center',
      padding: '4px 12px',
    },
    modalSearch: {
      '& div div::before': {
        border: 0,
      },
      '& div div::after': {
        border: 0,
      },
      '&:hover': {
        border: 0,
      },
      '&:hover :before': {
        border: 0,
      },
      '&:hover div::after': {
        border: 0,
      }
    },
    MuiAutocompleteInputRoot: {
      '&:hover :before': {
        border: 0,
      },
    }
  }),
);
export default function ModalChat({ }: Props): ReactElement {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
  ];
  return (

    <div className={classes.chatMessageWindow}>
      <Button onClick={handleOpen} className={classes.createRoomBtn}>
        Send Message
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" className={classes.modal}>
        <div className={classes.modalCreateRoom}>
          <div className={classes.modalHeader}>
            <CloseIcon style={{cursor: 'pointer'}} onClick={handleClose}/>
            <div className={classes.modalTitle}>New Message</div>
            <div className={classes.modalButton}>Next</div>
          </div>
          <div className={classes.modalBody}>
            <div>To: </div>
            <div style={{ width: '100%', marginLeft: '5px',  }}>
              <Autocomplete
                className={classes.modalSearch}
                multiple
                id="tags-filled"
                freeSolo
                fullWidth
                options={top100Films.map((option) => option.title)}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  // <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />
                  <TextField {...params} />
                )}
              />
            </div>
          </div>
          {/* <div></div> */}
        </div>
      </Modal>
    </div>
  )
}
