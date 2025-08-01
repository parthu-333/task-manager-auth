const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    app.listen(process.env.PORT || 10000, () => console.log("Server is running at port 5000"));
})
.catch(err => console.log(err));
