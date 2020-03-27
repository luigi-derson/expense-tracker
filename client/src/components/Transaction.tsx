import React, { useContext } from 'react'
import { GlobalContext, TransactionType } from '../context/GlobalState'

const Transaction: React.FC<TransactionType> = ({ text, amount, _id }) => {
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
        onClick={() => deleteTransaction(_id)}
        className="detele-btn"
      >
        x
      </button>
    </li>
  )
}

export default Transaction
