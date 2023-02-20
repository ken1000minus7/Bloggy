import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function SubmitDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className='font-SourceSansPro' variant="outlined" onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirmation Dialog"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className='font-SourceSansPro'>
            Do you want to save the changes ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='font-SourceSansPro' autoFocus onClick={handleClose}>
            No
          </Button>
          <Button className='font-SourceSansPro' onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}