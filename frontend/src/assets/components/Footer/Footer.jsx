import React from 'react';

const Footer = () => (
  <footer className="flex items-center justify-center py-5 border-t border-[var(--theme-border)] mt-auto">
    <p className="m-0 font-['JetBrains_Mono'] text-[11px] text-[var(--theme-text-muted)]">
      © {new Date().getFullYear()} akddev.co — all rights reserved.
    </p>
  </footer>
);

export default Footer;
