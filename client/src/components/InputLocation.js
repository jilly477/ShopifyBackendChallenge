import React, { useState } from "react";

const InputLocation = () => {
    const [location, setLocation] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {location};
            const response = await fetch("http://localhost:5000/locations", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            setLocation("");

            window.location = "/";
        } catch (err) { 
            console.error(err.message);
        }
    }

    return (
        <div>
            <h2 className="text-center mt-5  text-success">Locations</h2>
            <p className="text-center">All items in location must be deleted before location can be deleted!</p>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" required/>
                <button type="submit" className="btn">Add Location</button>
            </form>
        </div>
    )
}

export default InputLocation;