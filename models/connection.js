const mongoose = require('mongoose'); 

mongoose.connect('Mongodb Connection Url', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn = mongoose.connection;

conn.on('error', () => console.error.bind(console, 'connection error'));

conn.once('open', () => console.info('Connection to Database is successful'));

module.exports = conn;