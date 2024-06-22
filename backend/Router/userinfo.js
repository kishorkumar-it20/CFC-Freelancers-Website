const express = require('express');
const jwt = require('jsonwebtoken');
const RegUser = require('../Schema/RegSchema');
const router = express.Router();

router.get('/user-info', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await RegUser.findOne({ Email: decoded.email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.status(200).json({ user: { email: user.Email, role: user.role } });
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = router;
