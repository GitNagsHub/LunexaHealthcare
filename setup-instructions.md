# 🏥 Lunexa Healthcare Website - Gmail SMTP Setup Instructions

## Prerequisites
- Node.js installed on your system
- Gmail account with 2-Factor Authentication enabled
- Gmail App Password generated

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Gmail Setup

### Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### Generate App Password
1. In Google Account Security, go to "App passwords" section
2. Select "Mail" as the app
3. Generate a new 16-character app password
4. Copy this password (you'll need it for the .env file)

## Step 3: Environment Configuration

1. Copy the example environment file:
```bash
copy .env.example .env
```

2. Edit the `.env` file with your credentials:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=3000
```

**Important:** 
- Use your actual Gmail address for `nags.sellaiah@gmail.com`
- Use the 16-character App Password (NOT your regular Gmail password) for `kugv funh mcil ralc`

## Step 4: Start the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

## Step 5: Access the Website

Open your browser and go to: `http://localhost:3000`

## Features

### Contact Form
- ✅ Full form validation
- ✅ Gmail SMTP integration
- ✅ Professional email templates
- ✅ Auto-reply confirmation emails
- ✅ Error handling and user feedback

### Email Features
- **Notification Email**: Sent to your Gmail with contact details
- **Confirmation Email**: Sent to the person who submitted the form
- **Professional Templates**: Healthcare-themed email design
- **Reply-To Setup**: Easy to reply directly to inquiries

## Testing

1. Fill out the contact form on the website
2. Submit the form
3. Check your Gmail for the notification email
4. The person who submitted should receive a confirmation email

## Troubleshooting

### Common Issues

1. **"Invalid credentials" error**
   - Make sure you're using the App Password, not your regular Gmail password
   - Verify 2-Factor Authentication is enabled on your Google account

2. **"Connection refused" error**
   - Check if Gmail SMTP is accessible from your network
   - Some corporate networks block SMTP ports

3. **Form not submitting**
   - Check browser console for JavaScript errors
   - Verify the server is running on the correct port

### Server Logs
The server will log important information including:
- SMTP configuration status
- Email sending success/failure
- Error details for troubleshooting

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already added to `.gitignore`
- App Passwords are more secure than regular passwords for SMTP
- All emails are sent through Gmail's secure SMTP servers

## Support

If you encounter issues:
1. Check the server console for error messages
2. Verify your Gmail App Password is correct
3. Ensure 2-Factor Authentication is enabled
4. Check that Node.js and all dependencies are properly installed

---

## 📧 Email Preview

When someone submits the contact form, you'll receive a professional email with:
- Contact person's details
- Their message
- Timestamp
- Professional Lunexa Healthcare branding

The person who submitted the form will receive a confirmation email thanking them and providing your contact information.