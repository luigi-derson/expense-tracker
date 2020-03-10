import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList: React.FC<{}> = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(({ id, amount, text }) => (
          <Transaction id={id} amount={amount} text={text} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
