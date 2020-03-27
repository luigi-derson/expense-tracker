import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'

export type TransactionType = {
  _id: number
  text: string
  amount: number
}

export type NewTransactionType = {
  text: string
  amount: number
}

export type ContextProps = {
  transactions: TransactionType[]
  getTransactions: () => void
  deleteTransaction: (id: number) => void
  addTransaction: (transaction: NewTransactionType) => void
  error: string | null
  loading: boolean
}

const initialState: ContextProps = {
  transactions: [],
  getTransactions: () => null,
  deleteTransaction: () => null,
  addTransaction: () => null,
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions')

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      })
    }
  }

  const deleteTransaction = async (id: number) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)

      dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      })
    }
  }
  const addTransaction = async (transaction: NewTransactionType) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config)
      dispatch({ type: 'ADD_TRANSACTION', payload: res.data.data })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
