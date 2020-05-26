import React, {useContext} from 'react';
import { GloabalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

    const { transactions } = useContext(GloabalContext);

    const amounts = transactions.map(tx => tx.amount);

    const gelir = amounts.filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const gider = (amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

    // console.log(amounts, gelir, gider)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Geliriniz</h4>
                <p id="money-plus" className="money plus">${gelir}</p>
            </div>
            <div>
                <h4>Gideriniz</h4>
                <p id="money-minus" className="money minus">${gider}</p>
            </div>
        </div>

    )
}
