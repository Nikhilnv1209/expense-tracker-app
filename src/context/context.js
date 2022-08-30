import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpensetrackerContext = createContext(initialState);

export const Provider = ({children}) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    };
    
    const addTransaction = (transactions) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transactions })
    };

    let totalbalance = transactions.reduce((acc,curr) => curr.type === "Expense" ? acc - curr.amount : acc + curr.amount , 0)

    return(
        <ExpensetrackerContext.Provider value={{
            deleteTransaction , addTransaction ,transactions , totalbalance
        }}>
            {children}
        </ExpensetrackerContext.Provider>
    )
}