const express = require('express');
const router = express.Router();
const Enrollments = require('../DB/enrollments');

router.post('/', async (req, res) => {
  const { selectedYear, selectedMonth, selectedSlot, email, amount } = req.body;
  const slotId = selectedYear + selectedMonth + selectedSlot;
  // generate random paymentID
  const paymentId = Math.floor(Math.random() * 10000000000) + 1;

  const newEnrollment = new Enrollments({
    email: email, // Use the email from the request body
    slotId: slotId,
    paymentId: paymentId.toString(), // Convert paymentId to a string
  });


  newEnrollment.save()
    .then((savedEnrollment) => {
      res.json({ success: true });
    })
    .catch((error) => {
      res.json({ success: false });
    });
});

module.exports = router;
