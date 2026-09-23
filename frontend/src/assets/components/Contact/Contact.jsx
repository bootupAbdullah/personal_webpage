import React from 'react';

const items = [
  { code: 'em', label: 'EMAIL', value: 'akddev.co@gmail.com', href: 'mailto:akddev.co@gmail.com' },
  { code: 'in', label: 'LINKEDIN', value: 'abdullah-durrani', href: 'https://www.linkedin.com/in/abdullah-durrani/' },
  { code: 'gh', label: 'GITHUB', value: 'bootupAbdullah', href: 'https://github.com/bootupAbdullah' },
];

const Contact = () => (
  <div className="flex justify-center px-5 md:px-16 py-10 md:py-16">
    <div className="w-full max-w-[920px] flex flex-col gap-8 md:gap-10">

      <div className="flex flex-col gap-3">
        <div className="font-['JetBrains_Mono'] text-[11px] md:text-xs tracking-[0.1em] text-[var(--theme-text-muted)] mb-2">{'// CONTACT'}</div>
        <h1 className="m-0 font-['Space_Grotesk'] font-bold text-[28px] md:text-4xl text-[var(--theme-text-primary)]">Get In Touch</h1>
        <a
          href="mailto:akddev.co@gmail.com"
          aria-label="Email Abdullah"
          className="group inline-flex items-center gap-2 py-1.5 px-3 mt-4 border border-[var(--theme-border)] rounded-full bg-[#FAF6EC] dark:bg-[var(--theme-surface)] w-fit no-underline transition-transform duration-200 hover:scale-105"
        >
          <span className="relative flex w-[7px] h-[7px]">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--theme-accent)] opacity-75 animate-ping" />
            <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--theme-accent)] opacity-0 scale-100 transition-all duration-300 group-hover:opacity-60 group-hover:scale-[3] group-hover:animate-ping" />
            <span className="relative inline-flex w-[7px] h-[7px] rounded-full bg-[var(--theme-accent)]" />
          </span>
          <span className="font-['JetBrains_Mono'] text-[10px] md:text-[11px] tracking-[0.12em] text-[var(--theme-text-secondary)]">AVAILABLE FOR WORK</span>
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">

        {/* Photo */}
        <div className="w-full md:flex-none md:w-[320px] rounded-[10px] border border-[var(--theme-border)] bg-[#FAF6EC] dark:bg-[var(--theme-surface)] shadow-lg overflow-hidden">
          <div className="h-[34px] flex items-center gap-2 px-3.5 bg-[#F2ECDD] dark:bg-[var(--theme-surface-topbar)] border-b border-[var(--theme-border)]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#C9776A] dark:bg-[#8B4A3E]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#D9A857] dark:bg-[#A67C3D]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#4FA97D] dark:bg-[#3D8B68]" />
            <span className="font-['JetBrains_Mono'] text-xs text-[var(--theme-text-muted)] ml-1">dscf2243.jpg</span>
          </div>
          <img
            src="/images/contact-photo.jpg"
            alt="Abdullah Durrani"
            className="block w-full h-[260px] md:h-[300px] object-cover"
            style={{ objectPosition: '50% 5%' }}
          />
        </div>

        {/* Contact info */}
        <div className="flex-1 flex flex-col gap-5 md:gap-6">
          <p className="m-0 font-['Work_Sans'] text-base md:text-base leading-relaxed text-[var(--theme-text-secondary)] max-w-[460px]">
            I&apos;m actively seeking software development opportunities and would love to connect.
          </p>

          <div className="flex flex-col gap-2.5 md:gap-3">
            {items.map((item) => (
              <ContactItem key={item.code} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactItem = ({ code, label, value, href }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex items-center gap-3.5 md:gap-4 border-2 border-[var(--theme-border)] rounded-[10px] bg-[#FAF6EC] dark:bg-[var(--theme-surface)] shadow-md px-4 py-3.5 md:px-5 md:py-4 no-underline transition-all duration-200 hover:scale-[1.005] hover:border-[var(--theme-accent)]"
  >
    <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg border border-[var(--theme-accent)]/30 bg-[var(--theme-accent)]/10 flex items-center justify-center font-['JetBrains_Mono'] text-[10px] md:text-[11px] text-[var(--theme-accent)]">
      {code}
    </span>
    <span>
      <span className="block font-['JetBrains_Mono'] text-[10px] md:text-[11px] tracking-[0.08em] text-[var(--theme-text-muted)]">{label}</span>
      <span className="block font-['Work_Sans'] text-sm md:text-[15px] font-medium text-[var(--theme-accent)] mt-0.5">{value}</span>
    </span>
  </a>
);

export default Contact;
