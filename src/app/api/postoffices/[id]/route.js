import connectMongo from '@/lib/mongodb';
import PostOffice from '@/models/PostOffice';

export const GET = async (req, { params }) => {
  const { id } = params; // Extract the ID from the request parameters

  try {
    // Connect to MongoDB
    await connectMongo();

    // Find the post office by ID
    const postOffice = await PostOffice.findById(id);

    // Check if the post office exists
    if (!postOffice) {
      return new Response(
        JSON.stringify({ success: false, error: 'Post office not found' }),
        { status: 404 }
      );
    }

    // Return the post office details
    return new Response(JSON.stringify({ success: true, data: postOffice }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Server Error' }), { status: 500 });
  }
};
