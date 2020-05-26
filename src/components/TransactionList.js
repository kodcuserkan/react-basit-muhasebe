import React, { useContext } from 'react';
import { GloabalContext } from '../context/GlobalState'

export const TransactionList = () => {

    const { transactions, deleteTX } = useContext(GloabalContext);
    // console.log(transactions);

    return (
        <>
            <h3>Geçmiş</h3>
            <ul id="list" className="list">
                {/*<li className="minus">
                    Nakit <span>-$400.00</span><button className="delete-btn">x</button>
                 </li>*/}
                {transactions.map((tx) => <li key={tx.id} className={tx.amount < 0 ? "minus" : "plus"} >{<>{tx.text}<span>{tx.amount}</span><button className="delete-btn" onClick={() => deleteTX(tx.id) }>x</button></>}</li>)}
            </ul>
        </>
    )
}
