const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let contacts = [];

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'mithungpk@gmail.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this in environment variables
  }
});

router.post('/', async (req, res) => {
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
  
  // Send email notification
  try {
    const mailOptions = {
      from: 'mithungpk@gmail.com',
      to: 'mithungpk@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent on: ${new Date().toLocaleString()}</small></p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (emailError) {
    console.error('Error sending email:', emailError);
    // Still save the contact even if email fails
  }
  
  res.status(201).json({
    message: 'Thank you for your message! We will get back to you soon.',
    contact
  });
});

router.get('/', (req, res) => {
  res.json(contacts);
});

module.exports = router;
