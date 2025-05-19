import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out.
          </p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Location:</h2>
            <p className="text-gray-700 leading-relaxed">
              [SorcererChiragsingh Technologies Pvt. Ltd.]
              <br />
              [Delhi, 110092]
              <br />
              [India]
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information:</h2>
            <p className="text-gray-700 leading-relaxed">
              Email: <a href="mailto:[Your Email Address]" className="text-blue-500 hover:underline">chiragsingh9868@gmail.com</a>
              <br />
              Phone: <a href="tel:[Your Phone Number]" className="text-blue-500 hover:underline">+91 8810xxxxxx</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Send us a message:</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
