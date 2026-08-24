import { useParams, Link } from 'react-router-dom';
import { posts } from '../../../posts/index';

const postModules = import.meta.glob('../../../posts/*.mdx', { eager: true });

const Post = () => {
  const { slug } = useParams();
  const meta = posts.find((p) => p.slug === slug);
  const mod = postModules[`../../../posts/${slug}.mdx`];

  if (!meta || !mod) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh]">
        <p className="font-['Merriweather'] text-sm text-[#777777]">Post not found.</p>
        <Link to="/blog" className="font-['Merriweather'] text-xs text-[#d4a373] mt-4">← Back to Blog</Link>
      </div>
    );
  }

  const Content = mod.default;

  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-16">
      <Link to="/blog" className="font-['Merriweather'] text-xs text-[#d4a373] no-underline hover:text-[#c19a5a] transition-colors duration-200">
        ← Back to Blog
      </Link>

      {meta.image && (
        <img src={meta.image} alt={meta.title} className="w-full rounded-lg mt-8 mb-6 object-cover max-h-72" />
      )}

      <header className="mt-8 mb-10">
        <p className="font-['Merriweather'] text-xs text-[#aaaaaa] m-0 mb-3">{meta.date}</p>
        <h1 className="font-['Merriweather'] text-3xl font-bold text-[#2d2d2d] m-0 mb-3 leading-snug">{meta.title}</h1>
        <p className="font-['Merriweather'] text-base text-[#777777] m-0 leading-relaxed">{meta.subtitle}</p>
        <div className="h-[2px] bg-gradient-to-r from-[#d4a373] via-[#ccd5ae] to-transparent mt-8" />
      </header>

      <div className="prose-blog">
        <Content />
      </div>
    </article>
  );
};

export default Post;