const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB= require("./config/db");
const userRoutes = require("./Routes/Userroutes");
const clientroutes = require("./Routes/Clientroutes");




dotenv.config();
const app = express();
connectDB();




app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/Client", clientroutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});