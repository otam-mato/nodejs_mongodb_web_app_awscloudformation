const mongoose = require("mongoose");
const dbConfig = require("../config/config.js");
  // "mongodb://localhost:27017/coffee";

// Create mongoose connection
mongoose.connect(dbConfig.APP_DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Create a schema for suppliers
const SupplierSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  email: String,
  phone: String,
});

const Supplier = mongoose.model("Supplier", SupplierSchema);
module.exports = Supplier;



