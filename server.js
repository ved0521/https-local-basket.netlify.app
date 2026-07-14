 // server.js
 const express = require('express');
 const nodemailer = require('nodemailer');
 const bodyParser = require('body-parser');
 const cors = require('cors')
 const app = express()
 // Middlewares
 app.use(bodyParser.json());
 app.use(cors())
 // Test route (check if server is running)
app.get('/', (req, res) => {
 res.send('Backend is running!');
});

// POST route to send email
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, telephone, stateGroup, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vedika.optimint@gmail.com',     
      pass: 'hvdf xynj zqmk apbt'      
    }
  });

  const mailOptions = {
    from: 'vedika.optimint@gmail.com',
    to: 'vedikasingh9876@gmail.com', 
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    text: `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Telephone: ${telephone}
    Items: ${stateGroup.join(', ')}
    Message: ${message}
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: 'Email not sent.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ message: 'Email sent successfully!' });
    }
  });
 });
 // Start server
 const PORT = 3000;
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



