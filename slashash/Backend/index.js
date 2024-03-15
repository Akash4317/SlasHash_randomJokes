const express = require('express');
const { connections } = require('./config/db');
const { router } = require('./controllers/jokes.routes');
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());
app.use("/favorites", router)



app.listen(8080, () => {
    connections.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Server is running on port 8080');
            console.log("connected to database");
        }
    })

})