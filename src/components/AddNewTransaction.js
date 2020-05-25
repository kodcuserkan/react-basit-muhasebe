import React, {useState} from 'react'

export const AddNewTransaction = () => {

    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);

    return (
        <>
            <h3>Yeni Transfer</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Açıklama</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Açıklama giriniz"/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Tutar <br/> (eksi - gider, artı - gelir) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Lütfen tutar girin"></input>
                </div>
                <button className="btn">Ekle</button>
            </form>
        </>
    )
}
