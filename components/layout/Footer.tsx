import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm p-4 mt-10">
      <p>© 2025 Property Listing App. All rights reserved.</p>
      <p>
        <a href="#" className="text-blue-600 hover:underline mr-2">Privacy Policy</a>
        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
