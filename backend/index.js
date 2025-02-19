const express = require("express");
const cors = require("cors");
const homeRouter = require("./router/HomeRouter");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/", homeRouter);

app.listen(PORT, function () {
    console.log("Server listening on port", PORT);
});