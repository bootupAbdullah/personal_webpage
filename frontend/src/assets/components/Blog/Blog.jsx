import { Link } from 'react-router-dom';
import { posts } from '../../../posts/index';

const Blog = () => (
  <div className="flex flex-col items-center px-6 py-16 min-h-[75vh]">
    <h1 className="font-['Merriweather'] text-3xl font-bold text-[#2d2d2d] m-0 mb-12">Blog</h1>

    <div className="flex flex-col gap-6 w-full max-w-2xl">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  </div>
);

const PostCard = ({ slug, title, subtitle, date, image }) => (
  <Link
    to={`/blog/${slug}`}
    className="group flex flex-col sm:flex-row gap-5 bg-white border border-[#e9edc9] rounded-lg overflow-hidden shadow-sm no-underline transition-all duration-200 hover:shadow-md hover:border-[#d4a373] hover:-translate-y-0.5"
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full sm:w-48 h-40 sm:h-auto object-cover shrink-0"
      />
    )}
    <div className="flex flex-col justify-center gap-2 px-5 py-5 sm:pl-0">
      <p className="font-['Merriweather'] text-xs text-[#aaaaaa] m-0">{date}</p>
      <h2 className="font-['Merriweather'] text-lg font-bold text-[#2d2d2d] m-0 group-hover:text-[#d4a373] transition-colors duration-200">
        {title}
      </h2>
      <p className="font-['Merriweather'] text-base text-[#777777] m-0 leading-relaxed">{subtitle}</p>
    </div>
  </Link>
);

export default Blog;