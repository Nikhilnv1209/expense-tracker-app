import React , { useContext }from 'react';
import {IconButton, List as MUIlist, ListItem,Avatar,ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide} from '@material-ui/core';
import useStyles from './styles';
import { MoneyOff , Delete} from '@material-ui/icons';
import { ExpensetrackerContext } from '../../../context/context';

const Lists = () => {
    const classes = useStyles();

    const {deleteTransaction, transactions} = useContext(ExpensetrackerContext);



  return (
    
    <MUIlist dense = {false} className={classes.list}>

        {transactions.map((transactions) => (
            <Slide direction='down' in mountOnEnter unmountOnExit key={transactions.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className = {transactions.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary = {transactions.category} secondary = {`Rs.${transactions.amount} - ${transactions.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge = "end" aria-label='delete' onClick= {() => deleteTransaction(transactions.id)}>
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIlist>




  )
}

export default Lists