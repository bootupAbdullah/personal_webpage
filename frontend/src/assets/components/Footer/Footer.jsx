import React from 'react';

const Footer = () => (
  <footer className="text-center py-5 font-['Merriweather'] text-xs text-[#aaaaaa] dark:text-[#555555] border-t border-[#e9edc9] dark:border-[#333333] go:border-[#2A4A5E] mt-auto">
    <p className="m-0">© {new Date().getFullYear()} akddev.co &mdash; All rights reserved.</p>
  </footer>
);

export default Footer;
