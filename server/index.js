const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//INVENTORY TABLE//

// create an item
app.post("/inventory", async(req, res) => {
    try {
        const {item_name, description, amount, location} = req.body;
        const newItem = await pool.query(
            "INSERT INTO inventory (item_name, description, amount, location) VALUES ($1, $2, $3, $4) RETURNING *",
            [item_name, description, amount, location]
        );

        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all items
app.get("/inventory", async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM inventory");
        res.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get an item
app.get("/inventory/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const item = await pool.query("SELECT * FROM inventory WHERE id = $1", [id]);

        res.json(item.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// edit an item
app.put("/inventory/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { item_name, description, amount, location } = req.body;
        const updateItem = await pool.query(
            "UPDATE inventory SET item_name = $1, description = $2, amount = $3, location = $4 WHERE id = $5",
            [item_name, description, amount, location, id]
            );

            res.json("Item was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//delete an item
app.delete("/inventory/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await pool.query(
            "DELETE FROM inventory WHERE id = $1",
            [id]
        );

        res.json("Item was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

//---------------------------------------------------------------------------------------------------------

//lOCATIONS TABLE//

// create an item
app.post("/locations", async(req, res) => {
    try {
        const {location} = req.body;
        const newLocation = await pool.query(
            "INSERT INTO locations (location) VALUES ($1) RETURNING *",
            [location]
        );

        res.json(newLocation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all items
app.get("/locations", async(req, res) => {
    try {
        const allLocations = await pool.query("SELECT * FROM locations");
        res.json(allLocations.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get an item
app.get("/locations/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const location = await pool.query("SELECT * FROM locations WHERE id = $1", [id]);

        res.json(location.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// edit an item
app.put("/locations/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const {location } = req.body;
        const updateLocation = await pool.query(
            "UPDATE locations SET location = $1 WHERE id = $2",
            [location, id]
            );

            res.json("Location was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//delete an item
app.delete("/locations/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteLocation = await pool.query(
            "DELETE FROM locations WHERE id = $1",
            [id]
        );

        res.json("Location was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});