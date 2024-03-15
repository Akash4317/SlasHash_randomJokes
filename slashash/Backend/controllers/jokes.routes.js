const express = require('express');
const { connections } = require('../config/db');

const router = express.Router();


router.get("/", async(req, res) => {
    try {
        const query = ` SELECT * FROM jokes`;
        connections.query(query, [], (err, result) => {
            if (err) {
                console.log("we have got error while fetching jokes");
            } else {
                res.send(result);
            }
        })

    } catch (err) {
        console.log(err)
    }

})

router.post("/", async(req, res) => {
    try {
        const { id, joke } = req.body;
        console.log(joke, id);
        const query = `INSERT INTO jokes(id, joke) VALUES (?, ?)`;
        connections.query(query, [id, joke], (err, result) => {

            if (err) {
                console.log("Error inserting joke into database:", err);
                res.status(500).send("Internal Server Error");
            } else {
                console.log("Joke inserted successfully");
                res.status(200).send("Joke inserted successfully");
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});





module.exports = {
    router
}