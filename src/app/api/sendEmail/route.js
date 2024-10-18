import { sendEmail } from '@/lib/nodemailer';

export async function POST(req) {
  try {
    const { firstname, lastname, email, message } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate input fields
    if (!firstname || !lastname || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields are required' }),
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Prepare the email context with the new fields
    const context = { firstname, lastname, email, message };
    await sendEmail(context);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server Error' }),
      { status: 500 }
    );
  }
}
