const express = require('express');
const router = express.Router();

let contacts = [];

router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      message: 'Please provide name, email, subject, and message' 
    });
  }
  
  const contact = {
    id: contacts.length + 1,
    name,
    email,
    phone: phone || '',
    subject,
    message,
    createdAt: new Date().toISOString()
  };
  
  contacts.push(contact);
  
  res.status(201).json({
    message: 'Thank you for your message! We will get back to you soon.',
    contact
  });
});

router.get('/', (req, res) => {
  res.json(contacts);
});

module.exports = router;
