import React, {useContext} from 'react';
import { GlobalContext } from '../context/GobalState';
import Transaction from './Transaction';

function TransactionList() {

    const { transactions, clearTransactions } = useContext(GlobalContext);

    
    return (
        <>
            <div className="transaction-list-header">
                <h3>History</h3>
                <button className="clear-transaction-list-btn" onClick={clearTransactions}>Clear</button>
            </div>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    )
}

export default TransactionList
