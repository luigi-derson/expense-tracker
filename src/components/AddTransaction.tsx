import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

interface Props {
    
}

const AddTransaction: React.FC<Props> = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const { addTransaction } = useContext(GlobalContext)

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
    const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(transaction)
    }

     return (
        <>
         <h3>Add new transaction</h3>   
         <form onSubmit={onSubmit}>
             <div className="form-control">
                 <label htmlFor="text">Text</label>
                 <input type="text" value={text} onChange={onTextChange} placeholder="Enter text..." />
             </div>
             <div className="form-control">
                 <label htmlFor="amount">Amount <br /> (negative-expense, positive - income) </label>
                 <input type="number" value={amount} onChange={onAmountChange} placeholder="Enter amount..."/>
             </div>
             <button className="btn">Add transaction</button>
         </form>
        </>
    )
}

export default AddTransaction
