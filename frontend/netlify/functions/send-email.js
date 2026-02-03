const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, subject, message } = JSON.parse(event.body);

        // Create Gmail SMTP transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kishorepa64@gmail.com', // Your Gmail
                pass: 'genuotnhykahvygi', // Your App Password
            },
        });

        // Email options
        const mailOptions = {
            from: `"LMK SoftTech Contact" <kishorepa64@gmail.com>`,
            to: 'kishorepa64@gmail.com',
            replyTo: email,
            subject: `New Message: ${subject}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTION',
            },
            body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: 'Failed to send email' }),
        };
    }
};
