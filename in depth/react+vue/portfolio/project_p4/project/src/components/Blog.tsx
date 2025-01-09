import { useState } from 'react';
import { ChevronRight, Search, TrendingUp, BookOpen, Clock, Star, ArrowRight } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring emerging trends and technologies shaping modern web development',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop',
    date: '2024-03-15',
    readTime: 5,
    tags: ['Web Development', 'Future Tech', 'Trends'],
    featured: true
  },
  {
    id: '2',
    title: 'Mastering React Performance',
    excerpt: 'Advanced techniques for optimizing React applications',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&h=675&fit=crop',
    date: '2024-03-10',
    readTime: 8,
    tags: ['React', 'Performance', 'JavaScript']
  },
  {
    id: '3',
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to web accessibility',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop',
    date: '2024-03-05',
    readTime: 6,
    tags: ['Accessibility', 'UI/UX', 'Best Practices']
  },
  {
    id: '4',
    title: 'The Rise of AI in Web Development',
    excerpt: 'How artificial intelligence is transforming the development landscape',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop',
    date: '2024-03-01',
    readTime: 7,
    tags: ['AI', 'Machine Learning', 'Future Tech'],
    featured: true
  },
  {
    id: '5',
    title: 'Modern CSS Techniques',
    excerpt: 'Latest CSS features and best practices for modern web design',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=675&fit=crop',
    date: '2024-02-28',
    readTime: 6,
    tags: ['CSS', 'Web Design', 'Frontend']
  }
];

const popularTags = [
  'React', 'JavaScript', 'TypeScript', 'Web Development', 'UI/UX',
  'Performance', 'Accessibility', 'Frontend', 'Backend', 'AI'
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['all', 'technology', 'development', 'design'];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20">
      {/* Search Section */}
      <div className="bg-[#2A3B4C]/50 py-12 px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-[#1A1A1A] rounded-lg border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none text-white placeholder-gray-400"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="text-[#64FFDA]" size={24} />
            <h2 className="text-2xl font-bold">Featured Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#2A3B4C] rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative group h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-[#64FFDA]/20 text-[#64FFDA] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#64FFDA] text-[#1A1A1A]'
                      : 'bg-[#2A3B4C] text-white hover:bg-[#2A3B4C]/80'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-[#2A3B4C] rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-[#64FFDA]/10 text-[#64FFDA] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                      <a
                        href={`#post-${post.id}`}
                        className="inline-flex items-center text-[#64FFDA] hover:text-[#64FFDA]/80 font-medium group"
                      >
                        Read More
                        <ChevronRight 
                          className="ml-1 transform group-hover:translate-x-1 transition-transform" 
                          size={16} 
                        />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button className="w-full mt-8 py-3 bg-[#2A3B4C] text-white rounded-lg hover:bg-[#2A3B4C]/80 transition-colors font-medium">
              Load More Articles
            </button>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Popular Tags */}
            <div className="bg-[#2A3B4C] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-[#64FFDA]" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <a
                    key={tag}
                    href={`#${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-[#1A1A1A] text-gray-300 rounded-full text-sm hover:bg-[#64FFDA] hover:text-[#1A1A1A] transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Reading Stats */}
            <div className="bg-[#2A3B4C] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-[#64FFDA]" />
                Reading Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Articles Read</span>
                  <span className="text-[#64FFDA] font-bold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Time Spent</span>
                  <span className="text-[#64FFDA] font-bold">3.5 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Bookmarks</span>
                  <span className="text-[#64FFDA] font-bold">12</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#2A3B4C] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Get the latest articles delivered straight to your inbox.</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#64FFDA] text-[#1A1A1A] rounded-lg hover:bg-[#64FFDA]/90 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}