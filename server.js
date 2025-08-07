const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Gmail SMTP Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // Your Gmail App Password
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP configuration error:', error);
    } else {
        console.log('SMTP server is ready to take our messages');
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact form endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, company, subject, message } = req.body;

        // Input validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields (name, email, subject, message)'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // Email content for Lunexa Healthcare
        const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2c5aa0 0%, #1e3d73 100%); color: white; padding: 20px; text-align: center;">
                <h2>🏥 New Contact Form Submission</h2>
                <p>Lunexa Healthcare Website</p>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
                <h3 style="color: #2c5aa0; margin-bottom: 20px;">Contact Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; color: #333;">Name:</td>
                        <td style="padding: 10px; color: #555;">${name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; color: #333;">Email:</td>
                        <td style="padding: 10px; color: #555;">${email}</td>
                    </tr>
                    ${phone ? `
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; color: #333;">Phone:</td>
                        <td style="padding: 10px; color: #555;">${phone}</td>
                    </tr>
                    ` : ''}
                    ${company ? `
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; color: #333;">Company:</td>
                        <td style="padding: 10px; color: #555;">${company}</td>
                    </tr>
                    ` : ''}
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; color: #333;">Subject:</td>
                        <td style="padding: 10px; color: #555;">${subject}</td>
                    </tr>
                </table>
                <div style="margin-top: 25px;">
                    <h4 style="color: #2c5aa0; margin-bottom: 10px;">Message:</h4>
                    <div style="background: white; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 4px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>
            <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
                <p>This email was sent from the Lunexa Healthcare website contact form.</p>
                <p>Received on: ${new Date().toLocaleString()}</p>
            </div>
        </div>
        `;

        // Email options
        const mailOptions = {
            from: `"Lunexa Healthcare Website" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER, // Send to your Gmail
            replyTo: email, // Allow replying directly to the sender
            subject: `🏥 Lunexa Healthcare Contact Form: ${subject}`,
            html: htmlContent,
            text: `
                New contact form submission from Lunexa Healthcare website
                
                Name: ${name}
                Email: ${email}
                ${phone ? `Phone: ${phone}` : ''}
                ${company ? `Company: ${company}` : ''}
                Subject: ${subject}
                
                Message:
                ${message}
                
                Received on: ${new Date().toLocaleString()}
            `
        };

        // Send confirmation email to the sender
        const confirmationMailOptions = {
            from: `"Lunexa Healthcare" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `✅ Thank you for contacting Lunexa Healthcare`,
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #2c5aa0 0%, #1e3d73 100%); color: white; padding: 20px; text-align: center;">
                    <h2>🏥 Thank You for Contacting Us!</h2>
                    <p>Lunexa Healthcare</p>
                </div>
                <div style="padding: 30px;">
                    <p>Dear ${name},</p>
                    <p>Thank you for contacting Lunexa Healthcare. We have received your message and will get back to you within 24-48 hours.</p>
                    
                    <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
                        <h4 style="color: #2c5aa0; margin: 0 0 10px 0;">Your Message Summary:</h4>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    </div>
                    
                    <p>If you have any urgent inquiries, please call us at <strong>+1 (555) 123-4567</strong>.</p>
                    
                    <p>Best regards,<br>
                    <strong>Lunexa Healthcare Team</strong><br>
                    Medical Supply Solutions</p>
                </div>
                <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
                    <p>456 Medical Plaza, Healthcare District, City, State 54321</p>
                    <p>Phone: +1 (555) 123-4567 | Email: info@lunexahealthcare.com</p>
                </div>
            </div>
            `
        };

        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationMailOptions);

        console.log('Email sent successfully for:', name, email);

        res.json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Lunexa Healthcare server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🏥 Lunexa Healthcare server is running on http://localhost:${PORT}`);
    console.log(`📧 Gmail SMTP configured for: ${process.env.GMAIL_USER || 'Not configured'}`);
});