
import dotenv from 'dotenv';
import emailSender from '../utils/emailSender.js';

const sendNotification = async (req, res) => {
  try {
 
    const email = req.user?.email;
    if (!email) {
      return res.status(400).json({ message: "User email not found in token" });
    }
    
    const to = email; // recipient email
    
    const subject = 'Order Placed Successfully';

    // Email HTML with SportExpress branding
    const html = `
    <!DOCTYPE html>
    <html>
    <head><title>Order Confirmation</title></head>
    <body style="margin:0; padding:0; background:#fff; font-family: Arial, sans-serif; color:#333;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#fff">
        <tr>
          <td align="center" style="padding: 40px 10px;">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="border: 2px solid #d32f2f; border-radius: 6px;">
              <tr>
                <td bgcolor="#d32f2f" align="center" style="padding: 20px; color: #fff; font-size: 24px; font-weight: bold;">
                  Order Confirmation
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 40px 20px;">
                  <h1 style="color: #d32f2f; margin: 0 0 15px 0; font-size: 26px;">Your order has been placed successfully!</h1>
                  <p style="color: #555555; font-size: 16px; margin: 0;">
                    Thank you for your purchase. We’re processing your order and will notify you when it ships.
                  </p>
                  <a href="#" style="display: inline-block; margin-top: 30px; padding: 12px 25px; background: #d32f2f; color: #fff; text-decoration: none; font-weight: bold; border-radius: 4px;">
                    View Your Order
                  </a>
                </td>
              </tr>
              <tr>
                <td bgcolor="#f9f9f9" align="center" style="padding: 15px; font-size: 12px; color: #999;">
                  &copy; 2025 SportExpress. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`;

    await emailSender({ to, subject, html });

    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("Notification error:", error.message);
    res.status(500).json({ message: "Notification failed" });
  }
};


export default {
  sendNotification,
};



// import emailSender from '../utils/emailSender.js';


// const sendNotification = async (req, res) => {
//   try {
//       const email = req.user?.email;
//       if (!email) {
//         return res.status(400).json({ message: 'User email not found in token' });
//       }

//     const to = email; // Or get from req.body
//     const subject = 'Order Placed Successfully';
//     const html = `
//       <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
//         <h1 style="color: #4CAF50;">Thank You for Your Order!</h1>
//         <p>Hi there,</p>
//         <p>Your order has been <strong>successfully placed</strong>.</p>
        
//         <p>We’re processing your order and will notify you once it has been shipped.</p>

//         <h3 style="margin-top: 30px;">What Happens Next?</h3>
//         <ul>
//           <li>You'll receive an email confirmation shortly.</li>
//           <li>We’ll update you when your order is on its way.</li>
//         </ul>

//         <p>If you have any questions, feel free to reply to this email or contact our support team.</p>

//         <p>Thanks for shopping with us!</p>

//         <p style="margin-top: 40px;">Best regards,<br>The Team</p>

//         <hr style="margin: 40px 0;" />
//         <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply directly to this email.</p>
//       </div>
//     `;

//     await emailSender({ to, subject, html });

//     res.status(200).json({ message: 'Notification sent successfully' });
//   } catch (error) {
//     console.error('Notification error:', error.message);
//     res.status(500).json({ message: 'Notification failed', error: error.message });
//   }
// };

// export default {
//   sendNotification,
// };
