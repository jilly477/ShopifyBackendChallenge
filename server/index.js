const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

// create an item
app.post("/inventory", async(req, res) => {
    try {
        const {item_name, description, amount} = req.body;
        const newItem = await pool.query(
            "INSERT INTO inventory (item_name, description, amount) VALUES ($1, $2, $3) RETURNING *",
            [item_name, description, amount]
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
        const { item_name, description, amount } = req.body;
        const updateItem = await pool.query(
            "UPDATE inventory SET item_name = $1, description = $2, amount = $3 WHERE id = $4",
            [item_name, description, amount, id]
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

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});