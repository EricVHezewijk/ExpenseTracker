import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GobalState'

function AddTransaction() {
  
    const [text, setText] = useState('');
    const [amount, setamount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount //turns amount into number
      }

      addTransaction(newTransaction);
    }

    return (
    <>
      <div className="add-transaction-header">
        <h3>Add new transaction</h3>
      </div>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setamount(e.target.value)}/>
          </div>
          <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
