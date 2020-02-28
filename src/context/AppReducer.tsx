interface State {
    transactions: []
}

type Action = {type: string, payload: number} | {type: string, payload: {id: number, text: string, amount: number}}

export default function AppReducer (state: State, action: Action) {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(({ id }) => id !== action.payload)
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