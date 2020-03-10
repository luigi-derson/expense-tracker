import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

export type TransactionType = {
  id: number
  text: string
  amount: number
}

export type ContextProps = {
  transactions: TransactionType[]
  deleteTransaction: (id: number) => void
  addTransaction: (transaction: TransactionType) => void
}

const initialState: ContextProps = {
  transactions: [],
  deleteTransaction: () => null,
  addTransaction: () => null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = (id: number) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }
  const addTransaction = (transaction: TransactionType) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
