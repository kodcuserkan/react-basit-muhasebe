import React, {useState} from 'react'
import { Button } from '@material-ui/core';


export const AddNewTransaction = () => {

    let [text, setText] = useState('');
    let [amount, setAmount] = useState('');

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
                {/*<button className="btn">Ekle</button>*/}
                <Button className="btn" color="primary" variant="contained" style={{ marginTop: "10px", backgroundImage: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"}}>Ekle</Button>
            </form>
        </>
    )
}
