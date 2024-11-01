import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
      <p className="mt-4">
        Follow us on{' '}
        <a href="#" className="text-blue-400 hover:underline">
          Twitter
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-400 hover:underline">
          Instagram
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
