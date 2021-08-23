console.clear();
const express = require("express");
const connectDB = require("./config/db")

const app = express();


// connect database 
connectDB();

// Init Middleware
app.use(express.json({extented : false }));

app.get('/',(req,res)=>res.send("API running"));

//define Routes
app.use("/api/user",require("./routes/api/user"));
app.use("/api/auth",require("./routes/api/auth"));
app.use("/api/post",require("./routes/api/post"));
app.use("/api/profile",require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> 

console.log('server is running')

);