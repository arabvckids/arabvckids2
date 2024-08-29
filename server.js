const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password' // Replace with your email password
    }
});

app.post('/send-chore', (req, res) => {
    const { chore, kidEmail } = req.body;

    const mailOptions = {
        from: 'arabvc.com@gmail.com', // Sender address
        to: kidEmail, // List of receivers
        subject: 'New Chore Assigned', // Subject line
        text: `You have a new chore: ${chore}` // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email' });
        }
        res.json({ message: 'Chore sent successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

