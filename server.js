console.clear();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();


// connect database 
connectDB();

// Init Middleware
app.use(express.json({extented : false }));
// app.use(cors({origin:"*"}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/',(req,res)=>res.send("API running"));

//define Routes
app.use("/api/user",require("./routes/api/user"));
app.use("/api/auth",require("./routes/api/auth"));
app.use("/api/post",require("./routes/api/post"));
app.use("/api/profile",require("./routes/api/profile"));
app.use("/admin/register",require("./routes/admin/register"));
app.use("/map",require("./routes/map/gmap"));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const PORT = process.env.PORT || 4000;
  
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`)

);