const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, function () {
    console.log("Server listening on port", PORT);
});