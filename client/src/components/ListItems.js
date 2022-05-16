import React, { useState, useEffect } from "react";
import EditItem from "./EditItem";

const ListItems = () => {

    const [items, setItems] = useState([]);

    //delete item function
    const deleteItem = async (id) => {
        try {
            const deleteItem = await fetch(`http://localhost:5000/inventory/${id}`, {
                method: "DELETE"
            });

            setItems(items.filter(item => item.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getItems = async() => {
        try {

            const response = await fetch("http://localhost:5000/inventory")
            const jsonData = await response.json();

            setItems(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div>
            <table class="table table-striped mt-5 text-center">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.item_name}</td>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td>
                                <EditItem item={item} />
                            </td>
                            <td>
                                <button className = "btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListItems;