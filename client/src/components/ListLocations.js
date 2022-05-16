import React, { useState, useEffect } from "react";

const ListLocations = ({tableName}) => {

    const [locations, setLocations] = useState([]);

    //delete item function
    const deleteItem = async (id) => {
        try {
            const deleteItem = await fetch(`http://localhost:5000/locations/${id}`, {
                method: "DELETE"
            });

            setLocations(locations.filter(item => item.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getLocations = async() => {
        try {

            const response = await fetch(`http://localhost:5000/locations`)
            const jsonData = await response.json();

            setLocations(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div>
            <table class="table table-striped mt-5 text-center">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => (
                        <tr key={location.id}>
                            <td>{location.location}</td>
                            <td>
                                <button className = "btn btn-danger" onClick={() => deleteItem(location.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListLocations;