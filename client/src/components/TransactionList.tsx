import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList: React.FC<{}> = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(({ _id, amount, text }) => (
          <Transaction key={_id} _id={_id} amount={amount} text={text} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
