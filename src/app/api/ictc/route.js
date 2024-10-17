import connectMongo from '@/lib/mongodb';
import Ictc from '@/models/Ictc'; // Adjust the import according to your model file structure

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    const url = new URL(req.url);
    const district = url.searchParams.get('district'); // Get the district from query parameters


    // Check if district is provided
    if (!district) {
      return new Response(
        JSON.stringify({ success: false, error: 'District parameter is required' }),
        { status: 400 }
      );
    }

    // Fetch ICTCs matching the district
    const ictcs = await Ictc.find({ district });

    console.log(ictcs)

    // Return the ICTCs in the response
    return new Response(JSON.stringify({ success: true, data: ictcs }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Server Error' }), { status: 500 });
  }
};
