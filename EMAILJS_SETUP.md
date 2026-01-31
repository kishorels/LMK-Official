t# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails directly from your contact form to `kishorepa64@gmail.com`.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, click on **"Email Services"** in the sidebar
2. Click **"Add New Service"**
3. Choose your email provider (Gmail is recommended for `kishorepa64@gmail.com`)
4. Follow the instructions to connect your Gmail account
5. You'll receive a **Service ID** (copy this)

## Step 3: Create an Email Template

1. Click on **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Fill in the template details:
   - **Template Name**: Contact Form
   - **Subject**: `{{subject}}`
   - **Email Content** (IMPORTANT: Use these EXACT variable names):
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - **To Email**: Leave this field empty or set to your email. The recipient is automatically handled by the email service you connected in Step 2.
4. Click **"Save"**
5. You'll receive a **Template ID** (copy this)

**Important Notes about Email Configuration:**
- **To Email**: This is YOUR email address (`kishorepa64@gmail.com`) where you want to receive messages. You don't need to set this in EmailJS template - it's automatically handled by the email service you connected in Step 2.
- **From Email**: This is automatically handled by EmailJS. When you connect your Gmail in Step 2, emails will be sent FROM your Gmail account. The user's email (`{{from_email}}`) is included in the message body for your reference.

## Step 4: Get Your Public Key

1. Click on **"Account"** in the sidebar
2. Scroll down to **"General"** section
3. Copy your **Public Key**

## Step 5: Update Your Code

Open `frontend/src/components/sections/ContactSection.jsx` and replace the placeholder values:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID from Step 3
  templateParams,
  'YOUR_PUBLIC_KEY'        // Replace with your Public Key from Step 4
);
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email at `kishorepa64@gmail.com`

## Important Notes

- **To Email**: This is YOUR email address (`kishorepa64@gmail.com`) where you want to receive messages. You don't need to set this in EmailJS template - it's automatically handled by the email service you connected in Step 2.
- **From Email**: This is automatically handled by EmailJS. When you connect your Gmail in Step 2, emails will be sent FROM your Gmail account. The user's email (`{{from_email}}`) is included in the message body for your reference.

## Troubleshooting

- **Email not sending**: Make sure you've replaced all three placeholder values correctly
- **CORS errors**: Ensure your domain is added to EmailJS allowed domains
- **Rate limiting**: EmailJS free tier has a limit of 200 emails per month
- **Email sent but no data**: This means your EmailJS template variables don't match the form data. Make sure your template uses these EXACT variable names:
  - `{{from_name}}` - for the sender's name
  - `{{from_email}}` - for the sender's email address
  - `{{subject}}` - for the message subject
  - `{{message}}` - for the message content

**To fix the template issue:**
1. Go to EmailJS → Email Templates
2. Click on your "Contact Form" template
3. In the email content, make sure you're using the exact variable names listed above
4. Save the template
5. Test the form again

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Pricing](https://www.emailjs.com/pricing/)
