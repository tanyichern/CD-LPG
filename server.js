const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// load .env
dotenv.config();

// init app
const app = express();

// middleware
app.use(express.json());

// DB config
const db = process.env.MONGO_URI;

// connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// use routes
app.use('/api/lessons', require('./routes/api/lessons'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/units', require('./routes/api/units'));

// serve static assets if in production
if (process.env.NODE_ENV == 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
