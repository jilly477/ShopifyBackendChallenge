import React, { useState } from "react";

const InputItem = () => {
    const [item_name, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [location, setLocation] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {item_name, description, amount, location};
            const response = await fetch("http://localhost:5000/inventory", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            setItemName("");
            setDescription("");
            setAmount("");
            setLocation("");

            window.location = "/";
        } catch (err) { 
            console.error(err.message);
        }
    }

    return (
        <div>
            <h1 className="text-center mt-5">Inventory Database</h1>
            <p className="text-center">Note: Add locations to location table first before adding to inventory. Only locations that exist in the table are valid to be inputted. </p>
            <h2 className="text-center mt-5  text-success">Inventory</h2>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={item_name} onChange={e => setItemName(e.target.value)} placeholder="Item Name" required/>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required/>
                <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required/>
                <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" required/>
                <button type="submit" className="btn">Add To Inventory</button>
            </form>
        </div>
    )
}

export default InputItem;