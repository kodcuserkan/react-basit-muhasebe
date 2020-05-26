import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Başlangıç state i
let InitialState = {
    transactions: []
}

const getData = async () => {
    try {
        const data = await fetch('http://localhost:3333/transfers')
            .then(d => {
                return d.json();
            })
            .catch(err => console.log("Hata: ", err));

        console.log(data); // buradan devam edilecek, initial state güncellenmiyor
        return data;

    } catch (error) {
        const data = []
        console.log("Fetch hatası: ", error);
        return data;
    }
}

// Context oluşturma
export const GloabalContext = createContext(InitialState);

// Provider Component
export const GlobalProvider =  ({ children }) => {
    getData();
    
    const [state, dispatch] = useReducer(AppReducer, InitialState);

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

    return (<GloabalContext.Provider value={{
        transactions: state.transactions,
        deleteTX,
        addTX
    }}>
        {children}
    </GloabalContext.Provider>)
}