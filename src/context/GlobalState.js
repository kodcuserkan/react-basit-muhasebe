import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Başlangıç state i
const InitialState = {
    transactions: []
}

// Context oluşturma
export const GloabalContext = createContext(InitialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    // eslint-disable-next-line
    const [state,dispatch] = useReducer(AppReducer, InitialState);

    // Action lar 
    const deleteTX = (id) => {
        dispatch({
            type: "DELETE_TX",
            payload: id
        })
    } 

    const addTX = (tx) => {
        dispatch({
            type: "ADD_TX",
            payload: tx
        })
    } 

    return(<GloabalContext.Provider value={{
        transactions: state.transactions,
        deleteTX,
        addTX
    }}>
        {children}
    </GloabalContext.Provider>)
}