const mongoose = require('mongoose');

// Define the Enrollment schema
const enrollmentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  slotId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
},{ collection: 'Enrollments' });



module.exports = mongoose.model('enrollments', enrollmentSchema);;

