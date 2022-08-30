import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from './styles'

const CustomizedSnackbar = ({open , setOpen}) => {
    const classes = useStyles();

    // eslint-disable-next-line no-restricted-globals
    const handleClose = (event , reason) =>{
        if(reason === 'clickaway') return;

        setOpen(false);
    }

    return(
        <div className={classes.root}>
            <Snackbar
            anchorOrigin={{vertical : 'top', horizontal : 'right'}}
            autoHideDuration = {2000}
            open = {open}
            onClose = {handleClose}
            >

        <MuiAlert onClose={handleClose} severity = "success" elevation={6} variant = "filled" >
            Transaction Succesfull Created
            </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar;