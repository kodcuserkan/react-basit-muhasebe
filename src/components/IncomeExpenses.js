import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Geliriniz</h4>
                <p id="money-plus" className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Gideriniz</h4>
                <p id="money-minus" className="money minus">-$0.00</p>
            </div>
        </div>

    )
}
