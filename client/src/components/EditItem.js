import React, {useState} from "react";

const EditItem = ({item}) => {
    const [item_name, setItemName] = useState(item.item_name);
    const [description, setDescription] = useState(item.description);
    const [amount, setAmount] = useState(item.amount);

    //edit item
    const updateItem = async(e) => {
        e.preventDefault();
        try {
            const body = {item_name, description, amount};
            const response = await fetch(`http://localhost:5000/inventory/${item.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location ="/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>

            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${item.id}`}>
                Edit
            </button>


            <div class="modal" id={`id${item.id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Edit Item</h4>
                            <button type="button" class="close" data-dismiss="modal" >&times;</button>
                        </div>


                        <div class="modal-body">
                            <input type="text" className="form-control" value={item_name} onChange={e => setItemName(e.target.value)} />
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                            <input type="number" className="form-control"value={amount} onChange={e => setAmount(e.target.value)}/>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick= {e => updateItem(e)}>Edit</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditItem;