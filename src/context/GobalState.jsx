import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.jsx';

//Initial state
const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function clearTransactions() {
        dispatch({
            type: 'CLEAR_TRANSACTIONS',
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearTransactions
    }}>
        {children}
    </GlobalContext.Provider>);
}