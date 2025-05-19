import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">About WishBasket</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to WishBasket! We are a passionate team dedicated to providing you with a delightful and convenient online shopping experience. Our mission is to curate a wide selection of high-quality products that cater to your needs and desires.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2024, WishBasket started with a simple idea: to make shopping easier and more enjoyable for everyone. We believe in customer satisfaction and strive to offer exceptional service at every step.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>Quality Products: We carefully select our products to ensure they meet high standards.</li>
            <li>Customer Focus: Your satisfaction is our top priority. We are always here to help.</li>
            <li>Innovation: We continuously look for ways to improve our platform and offerings.</li>
            <li>Community: We believe in building a strong and positive community around our brand.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Thank you for being a part of the WishBasket family! We appreciate your support.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
