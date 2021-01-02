import React from 'react';
import '../scss/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <span>Copyright © {currentYear}r.</span>
    </div>
  );
};

export default Footer;
