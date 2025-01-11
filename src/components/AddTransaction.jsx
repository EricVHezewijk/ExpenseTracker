import React, {useState} from 'react'

function AddTransaction() {
  
    const [text, setText] = useState('');
    const [ammount, setAmmount] = useState(0)

    return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
