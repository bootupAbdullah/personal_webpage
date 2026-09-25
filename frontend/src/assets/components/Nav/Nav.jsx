import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import { posts } from '../../../posts';

const LAST_SEEN_BLOG_KEY = 'lastSeenBlogSlug';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [hasNewPost, setHasNewPost] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const latestSlug = posts[0]?.slug;
    if (!latestSlug) return;

    if (location.pathname === '/blog') {
      localStorage.setItem(LAST_SEEN_BLOG_KEY, latestSlug);
      setHasNewPost(false);
    } else {
      setHasNewPost(localStorage.getItem(LAST_SEEN_BLOG_KEY) !== latestSlug);
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--theme-bg)]/90 backdrop-blur-sm border-b border-[var(--theme-border)]">
      <nav className="flex justify-between items-center h-[60px] md:h-[72px] px-5 md:px-16">
        <Link
          to="/"
          className="font-['JetBrains_Mono'] font-bold text-base md:text-lg text-[var(--theme-accent)] no-underline leading-none"
        >
          <span className="text-[var(--theme-text-muted)]">&gt;</span> akddev.co
        </Link>

        <div className="flex items-center gap-3 md:gap-10">
          {/* Desktop links */}
          <ul className="hidden md:flex flex-row gap-10 list-none m-0 p-0 text-base font-medium">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/blog" badge={hasNewPost}>Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-transparent border-none cursor-pointer p-1.5 flex flex-col gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[var(--theme-accent)] transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : 'bg-[var(--theme-text-secondary)]'}`} />
            <span className={`block w-5 h-0.5 bg-[var(--theme-accent)] transition-all duration-200 ${open ? 'opacity-0' : 'bg-[var(--theme-text-secondary)]'}`} />
            <span className={`block w-5 h-0.5 bg-[var(--theme-accent)] transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : 'bg-[var(--theme-text-secondary)]'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — pushes content down, not an overlay */}
      {open && (
        <ul className="md:hidden flex flex-col list-none m-0 py-2 px-0 border-t border-[var(--theme-border)] divide-y divide-[var(--theme-border)] bg-[var(--theme-surface)] shadow-sm text-base font-medium">
          <li><NavLink to="/" mobile onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" mobile onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/blog" mobile badge={hasNewPost} onClick={() => setOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/contact" mobile onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>
      )}
    </header>
  );
};

const ThemeToggle = () => {
  const { theme, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className="w-[30px] h-[30px] md:w-9 md:h-9 rounded-md md:rounded-lg border border-[var(--theme-border)] flex items-center justify-center bg-transparent cursor-pointer transition-transform duration-200 hover:scale-105"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl leading-none text-transparent"
        style={{ WebkitTextStroke: '1.4px var(--theme-accent)' }}
      >
        {theme === 'dark' ? '1' : '2'}
      </span>
    </button>
  );
};

const NewPostBadge = () => (
  <span
    className="absolute font-['JetBrains_Mono'] font-bold text-[var(--theme-accent)]"
    style={{ fontSize: '0.6em', top: '-0.1em', right: '-0.7em' }}
    aria-hidden="true"
  >
    !
  </span>
);

const NavLink = ({ to, children, onClick, mobile = false, badge = false }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const label = badge ? (
    <span className="relative">
      {children}
      <NewPostBadge />
      <span className="sr-only"> (new post)</span>
    </span>
  ) : (
    children
  );

  if (mobile) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`block text-center py-3.5 no-underline transition-colors duration-200 hover:bg-[var(--theme-surface-topbar)] active:bg-[var(--theme-surface-topbar)] ${
          isActive ? 'text-[var(--theme-accent)] font-semibold bg-[var(--theme-surface-topbar)]' : 'text-[var(--theme-text-secondary)]'
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`no-underline relative pb-1 transition-colors duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:bg-[var(--theme-accent)] after:transition-all after:duration-300 after:h-[2px]
        ${isActive
          ? 'text-[var(--theme-accent)] after:w-full'
          : 'text-[var(--theme-text-secondary)] after:w-0 hover:text-[var(--theme-text-primary)] hover:after:w-full'
        }`}
    >
      {label}
    </Link>
  );
};

export default Nav;
