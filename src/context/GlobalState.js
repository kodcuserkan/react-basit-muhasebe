import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Başlangıç state i
const InitialState = {
    transactions: [
        {id:1, text:"Satranç saati", amount: -30},
        {id:2, text:"Maaş ödemesi", amount: 1200},
        {id:3, text:"Vergi iadesi", amount: 390},
        {id:4, text:"Kamp çadırı", amount: -630}
    ]
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

    return(<GloabalContext.Provider value={{
        transactions: state.transactions,
        deleteTX
    }}>
        {children}
    </GloabalContext.Provider>)
}