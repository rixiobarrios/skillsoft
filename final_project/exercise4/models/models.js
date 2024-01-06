const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Weights', { useNewUrlParser: true });
const coll = "EmployeeWeights";
const wSchema = new mongoose.Schema({
  empName: String,
  empWeight: String	
});
module.exports = mongoose.model('Weights', wSchema, coll);