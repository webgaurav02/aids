import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900  text-white py-10 px-5 md: lg:px-40">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
        
        {/* Subscribe Section */}
        <div className="flex flex-col space-y-4  md:text-left">
          <h1 className=" text-[31px] md:text-[36px] font-semibold">Subscribe for Updates</h1>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full md:w-64 p-2 rounded bg-gray-800 text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="flex flex-col space-y-2 md:items-center md:text-center md:text-left">
          <h1 className="text-[23px] md:text-[30px]">Contact Us</h1>
          <p className='md:text-[25px]'>MEGHALAYA</p>
          <p className='md:text-[25px]'>RILUMCREATIVES</p>
          <p className='md:text-[25px]'>Tel: 123-456-7890</p>
        </div>

        {/* Find Us Section with Map */}
        <div className="flex flex-col space-y-2 md:items-center md:text-center md:text-left">
          <h1 className=" text-[25px] md:text-[36px]  font-semibold">Find Us</h1>
          <div className=" mr-4  md:w-full md:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763530.6252600695!2d89.99177369699613!3d25.570266334194745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd207f%3A0xf5ef6117f496d6e!2sMeghalaya!5e1!3m2!1sen!2sin!4v1729163442987!5m2!1sen!2sin"
              width="100%"
              height="60%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
