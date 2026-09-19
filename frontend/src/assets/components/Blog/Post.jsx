import { useParams, Link } from 'react-router-dom';
import { posts } from '../../../posts/index';

const postModules = import.meta.glob('../../../posts/*.mdx', { eager: true });

const Post = () => {
  const { slug } = useParams();
  const meta = posts.find((p) => p.slug === slug);
  const mod = postModules[`../../../posts/${slug}.mdx`];

  if (!meta || !mod) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-sm text-[var(--theme-text-secondary)]">Post not found.</p>
        <Link to="/blog" className="font-['JetBrains_Mono'] text-xs text-[var(--theme-accent)] no-underline">← back to blog</Link>
      </div>
    );
  }

  const Content = mod.default;

  return (
    <div className="flex justify-center px-5 md:px-16 py-6 md:py-14">
      <article className="w-full max-w-[760px] flex flex-col">

        <Link
          to="/blog"
          className="inline-flex items-center w-fit font-['JetBrains_Mono'] text-[11px] md:text-xs font-semibold text-[var(--theme-accent-on)] bg-[var(--theme-accent)] rounded-full py-1.5 px-3.5 md:py-2 md:px-4 no-underline"
        >
          ← back to blog
        </Link>

        {meta.heroImage && (
          <img
            src={meta.heroImage}
            alt={meta.title}
            className="w-full h-[190px] md:h-[320px] object-cover rounded-[10px] border border-[var(--theme-border)] mt-4.5 md:mt-6"
          />
        )}

        <div className="flex items-center gap-3.5 md:gap-5 flex-wrap mt-4.5 md:mt-6">
          <span className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-text-muted)]">{meta.date}</span>
          {meta.flow && (
            <Link to={`/flow/${meta.slug}`} className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-accent)] no-underline">
              → flow chart
            </Link>
          )}
          {meta.links?.github && (
            <a href={meta.links.github} target="_blank" rel="noopener noreferrer" className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-accent)] no-underline">
              → github
            </a>
          )}
          {meta.links?.linkedin && (
            <a href={meta.links.linkedin} target="_blank" rel="noopener noreferrer" className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-accent)] no-underline">
              → linkedin
            </a>
          )}
          {meta.links?.bluesky && (
            <a href={meta.links.bluesky} target="_blank" rel="noopener noreferrer" className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-accent)] no-underline">
              → bluesky
            </a>
          )}
        </div>

        <h1 className="m-0 mt-2.5 font-['Space_Grotesk'] font-bold text-2xl md:text-[34px] leading-[1.25] md:leading-[1.2] text-[var(--theme-text-primary)]">{meta.title}</h1>
        <p className="m-0 mt-2 text-sm md:text-base leading-relaxed text-[var(--theme-text-secondary)]">{meta.subtitle}</p>

        <div
          className="h-0.5 mt-5 md:mt-7"
          style={{ background: `linear-gradient(to right, var(--theme-accent), transparent)` }}
        />

        <div className="prose-blog mt-5 md:mt-8">
          <Content />
        </div>
      </article>
    </div>
  );
};

export default Post;
