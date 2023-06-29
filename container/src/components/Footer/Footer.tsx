import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <img className="imageFooter" src={'/logo copy.svg'} />
      <p>©2022 Crack The Code. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
