import React, { useContext } from 'react';
import { GloabalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext(GloabalContext);

    const amounts = transactions.map(tx => tx.amount);

    console.log(transactions)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Bakiyeniz</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
