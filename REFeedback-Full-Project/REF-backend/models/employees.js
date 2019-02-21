const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const employeesSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  position: { type: String, required: true },
  permission: { type: String, required: true, default: 'employee' }
});

employeesSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Employees", employeesSchema);