const express = require('express');
const router = express.Router();
const Enrollment = require('../DB/enrollments'); // Adjust the path

// Route to get enrollments by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const enrollments = await Enrollment.find({ email });
    let sessions = [];
        for (var i = 0; i < enrollments.length; i++) {
            
            var sessionObj = {
                _id: enrollments[i]._id.toString(),
                slotId: enrollments[i].slotId,
                paymentId: enrollments[i].paymentId,
            } 
            sessions.push(sessionObj);
        }

        


    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
