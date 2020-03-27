import { ContextProps, TransactionType } from './GlobalState'

type Action =
  | { type: 'DELETE_TRANSACTION'; payload: number }
  | { type: 'ADD_TRANSACTION'; payload: TransactionType }
  | { type: 'GET_TRANSACTIONS'; payload: TransactionType[] }
  | { type: 'TRANSACTION_ERROR'; payload: string }

export default function AppReducer(state: ContextProps, action: Action) {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ _id }) => _id !== action.payload
        )
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
