import connectMongo from '@/lib/mongodb';
import PostOffice from '@/models/PostOffice';

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Get the search query from the URL parameters
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');

    console.log(search);

    // Check if search term is provided
    if (!search) {
      return new Response(
        JSON.stringify({ success: false, error: 'Search term is required' }),
        { status: 400 }
      );
    }

    // Define the query based on the input type
    let query;
    if (/^\d+$/.test(search)) { // Check if the input is numeric
      query = { pin: search }; // Exact match for pin
    } else {
      query = { post_office_name: { $regex: search, $options: 'i' } }; // Case-insensitive match for name
    }

    // Perform a search for matching post offices
    const postOffices = await PostOffice.find(query).limit(5); // Limit to top 5 results

    // Return the post offices in the response
    return new Response(JSON.stringify({ success: true, data: postOffices }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Server Error' }), { status: 500 });
  }
};
