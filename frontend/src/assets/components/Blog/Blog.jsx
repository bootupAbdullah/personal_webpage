import { Link } from 'react-router-dom';
import { posts } from '../../../posts/index';

const Blog = () => {
  const [featured, ...rest] = posts;

  return (
    <div className="px-8 md:px-16 py-10 min-h-[75vh]">
    <div className="w-full border border-[#e0d5c5] rounded-2xl px-8 md:px-12 py-12 shadow-sm">
      <div className="flex items-baseline gap-3 mb-10">
        <h1 className="font-['Merriweather'] text-3xl font-bold text-[#2d2d2d] m-0">Blog</h1>
        <span className="font-['Merriweather'] font-bold text-2xl text-[var(--theme-accent)]">/</span>
        <span className="font-['Merriweather'] font-bold text-2xl text-[#e0a060]">/</span>
        <span className="font-['Merriweather'] font-bold text-2xl text-[#eac99a]">/</span>
      </div>

      <div className="flex flex-col gap-5 w-[90%]">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
    </div>
  );
};


const PostCard = ({ slug, title, subtitle, date, image }) => (
  <Link
    to={`/blog/${slug}`}
    className="group flex flex-row bg-white border-2 border-[#e0d5c5] rounded-xl overflow-hidden shadow-sm no-underline transition-all duration-200 hover:shadow-md hover:border-[var(--theme-accent)] hover:-translate-y-0.5"
  >
    {image && (
      <img src={image} alt={title} className="w-56 h-40 object-cover object-top shrink-0" />
    )}
    <div className="flex flex-col justify-center gap-2 px-8 py-6">
      <p className="font-['Merriweather'] text-xs text-[#aaaaaa] m-0">{date}</p>
      <h2 className="font-['Merriweather'] text-xl font-bold text-[#2d2d2d] m-0 group-hover:text-[var(--theme-accent)] transition-colors duration-200">{title}</h2>
      <p className="font-['Merriweather'] text-sm text-[#777777] m-0 leading-relaxed">{subtitle}</p>
      <p className="font-['Merriweather'] text-sm text-[var(--theme-accent)] m-0 mt-2 font-semibold">Read more →</p>
    </div>
  </Link>
);

export default Blog;
