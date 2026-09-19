import { Link } from 'react-router-dom';
import { posts } from '../../../posts/index';

const linkOrder = [
  { key: 'flow', label: 'flow chart' },
  { key: 'github', label: 'github' },
  { key: 'linkedin', label: 'linkedin' },
  { key: 'bluesky', label: 'bluesky' },
];

const Blog = () => (
  <div className="flex justify-center px-5 md:px-16 py-8 md:py-14">
    <div className="w-full max-w-[760px] flex flex-col gap-5 md:gap-6">

      <div>
        <div className="font-['JetBrains_Mono'] text-[11px] md:text-xs tracking-[0.1em] text-[var(--theme-text-muted)] mb-2">{'// BLOG'}</div>
        <h1 className="m-0 font-['Space_Grotesk'] font-bold text-[28px] md:text-4xl text-[var(--theme-text-primary)]">Writing</h1>
      </div>

      <div className="flex flex-col gap-4 md:gap-[18px]">
        {posts.map((post, i) => (
          <PostCard key={post.slug} {...post} featured={i === 0} />
        ))}
      </div>
    </div>
  </div>
);

const PostCard = ({ slug, title, subtitle, date, links = {}, flow, featured = false }) => {
  const activeLinks = linkOrder.filter(({ key }) => (key === 'flow' ? flow : links[key]));

  return (
    <div
      className={`rounded-xl bg-[var(--theme-surface)] border px-5 py-4.5 md:px-7 md:py-6 transition-colors duration-200 ${
        featured ? 'border-[var(--theme-accent)]' : 'border-[var(--theme-border)] hover:border-[var(--theme-accent)]'
      }`}
    >
      <Link to={`/blog/${slug}`} className="no-underline">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-text-muted)]">{slug}.mdx</span>
          <span className="font-['JetBrains_Mono'] text-[10px] md:text-[11px] text-[var(--theme-text-muted)] whitespace-nowrap">{date}</span>
        </div>
        <div className="font-['Space_Grotesk'] font-bold text-lg md:text-[22px] leading-snug text-[var(--theme-text-primary)] mt-2.5">{title}</div>
        <p className="m-0 mt-2 text-[13px] md:text-sm leading-relaxed text-[var(--theme-text-secondary)] max-w-[620px]">{subtitle}</p>
      </Link>
      {activeLinks.length > 0 && (
        <div className="flex flex-wrap gap-4 md:gap-5 mt-3.5">
          {activeLinks.map(({ key, label }) => (
            <PostLink
              key={key}
              href={key === 'flow' ? `/flow/${slug}` : links[key]}
              internal={key === 'flow'}
              label={label}
              featured={featured}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PostLink = ({ href, internal, label, featured }) => {
  const className = `font-['JetBrains_Mono'] text-[11px] md:text-xs no-underline transition-colors duration-200 ${
    featured ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)]'
  }`;

  if (internal) {
    return <Link to={href} className={className}>→ {label}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      → {label}
    </a>
  );
};

export default Blog;
