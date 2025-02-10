import Header from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import IncomeExpenses from './components/IncomeExpenses.jsx'
import TransactionList from './components/TransactionList.jsx'
import AddTransaction from './components/AddTransaction.jsx'

import { GlobalProvider } from './context/GobalState.jsx'

import './App.css'

function App() {

  return (
    <GlobalProvider>
      <div className="container">
      <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
