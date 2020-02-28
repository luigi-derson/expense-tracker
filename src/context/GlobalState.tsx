import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

type Transaction = {
    id: number,
    text: string,
    amount: number
}

interface ContextProps {
    transactions: Transaction[],
    deleteTransaction: Function
    addTransaction: Function
}

interface State {
    transactions: Transaction[],
    deleteTransaction: () => null,
    addTransaction: () => null
}


interface Props {}

const initialState: State = {
    transactions: [],
    deleteTransaction: () => null,
    addTransaction: () => null
};

export const GlobalContext = createContext<ContextProps>(initialState);

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer<Function, State>(AppReducer, initialState);

    const deleteTransaction = (id: number) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id })}
    const addTransaction = (transaction: ContextProps) => { dispatch({ type: 'ADD_TRANSACTION', payload: transaction })}

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            { children }
        </GlobalContext.Provider>
    );
}

// { id: 1, text: 'Flower', amount: -20 },
// { id: 2, text: 'Salary', amount: 300 },
// { id: 3, text: 'Book', amount: -10 },
// { id: 4, text: 'Camera', amount: 150 },
