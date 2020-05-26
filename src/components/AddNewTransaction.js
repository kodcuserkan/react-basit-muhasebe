import React, {useState, useContext} from 'react'
import { Button } from '@material-ui/core';
import { GloabalContext } from '../context/GlobalState';


export const AddNewTransaction = () => {

    let [text, setText] = useState('');
    let [amount, setAmount] = useState('');

    const { addTX } = useContext(GloabalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (amount === "" || amount === 0) {
            
            return;
        }
        const newTX = {
            id: Math.floor(Math.random() * 1121021021201020),
            text,
            amount
        }

        addTX(newTX);
        setText('');
        setAmount('');
    }



    return (
        <>
            <h3>Yeni Transfer</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Açıklama</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Açıklama giriniz"/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Tutar <br/> (eksi - gider, artı - gelir) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Lütfen tutar girin"></input>
                </div>
                {/*<button className="btn">Ekle</button>*/}
                <Button type="submit" className="btn" color="primary" variant="contained" style={{ marginTop: "10px", backgroundImage: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"}}>Ekle</Button>
            </form>
        </>
    )
}
