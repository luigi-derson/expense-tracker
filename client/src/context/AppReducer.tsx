import { ContextProps, TransactionType } from './GlobalState'

type Action =
  | { type: 'DELETE_TRANSACTION'; payload: number }
  | { type: 'ADD_TRANSACTION'; payload: TransactionType }

export default function AppReducer(state: ContextProps, action: Action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ id }) => id !== action.payload
        )
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    default:
      return state
  }
}
