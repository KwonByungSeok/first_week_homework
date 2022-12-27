const express = require("express");
const app = express();

require("dotenv").config();

const PORT = 3000 || 8000;
app.listen(PORT, console.log("Server don start for port : " + PORT));
