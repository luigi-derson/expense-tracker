import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

interface Props {
    text: string,
    amount: number,
    id: number
}

const Transaction: React.FC<Props> = ({ text, amount, id }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    
    const sign = amount < 0 ? '-' : '+'

    return (
        <li className={amount < 0 ? "minus" : "plus"}>
            {text} <span>{sign}${Math.abs(amount)}</span><button onClick={() => deleteTransaction(id)} className="detele-btn">x</button>
        </li>
    )
}

export default Transaction
