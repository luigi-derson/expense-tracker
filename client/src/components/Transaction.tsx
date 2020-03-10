import React, { useContext } from 'react'
import { GlobalContext, TransactionType } from '../context/GlobalState'

const Transaction: React.FC<TransactionType> = ({ text, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = amount < 0 ? '-' : '+'

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button
        type="button"
        onClick={() => deleteTransaction(id)}
        className="detele-btn"
      >
        x
      </button>
    </li>
  )
}

export default Transaction
