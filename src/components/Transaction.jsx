import React from 'react'

function Transaction({ transaction }) {

    const sign = transaction.ammount < 0 ? '-' : '+';

    return (
        <li className="minus">
            {transaction.text} <span>{sign}${transaction.amount}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
