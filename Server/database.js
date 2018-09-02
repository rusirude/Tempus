var mongoose = require('mongoose');

const dbUser = 'unuse';
const password = 'unuse@123';
const database = 'unusedb';

mongoose.connect('mongodb://localhost:27017/'+database);

module.exports = mongoose.connection;