import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Leaf, Droplet, TreePine, Recycle } from 'lucide-react';
import { Link } from "react-router-dom";

import blogImg from "../assets/images/blog.png";
// Environmental blog data
const allBlogs = [
{
  id: 1,
  title: "Article 6 of the Paris Agreement & Carbon Markets: Detailed Guide for 2025",
  excerpt: "Carbon markets are no longer just a policy discussion — they are becoming the backbone of how countries and businesses plan to reach net zero emissions.",
  image: blogImg,
  category: "Climate Action",
  date: "Nov 15, 2025",
  readTime: "5 min read",
  author: "Devesh Malu",
  icon: "leaf",
  route: "/paris",
},

  {
    id: 2,
    title: "Ecoding India's Carbon Market: A Bold Step Towards a Greener Future",
    excerpt: "India, a nation balancing rapid economic growth with a deep commitment to environmental responsibility, is taking significant strides in the fight against climate change.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop",
    category: "Green Future",
    date: "Nov 12, 2025",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/carbonMarketLanding",
  },
  {
    id: 3,
    title: "CPCB’s SIMP Portal: A Step Towards Streamlined Plastic Waste Management Compliance",
    excerpt: "The Central Pollution Control Board (CPCB) has launched the Sellers, Importers, and Manufacturers of Plastic Raw Materials (SIMP) Portal .",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop",
    category: "CPCB PORTAL",
    date: "Nov 10, 2025",
    readTime: "6 min read",
    author: "Devesh Malu",
    icon: "tree",
    route: "/cpcbsimp",
  },
  {
    id: 4,
    title: "Extended Producer Responsibility (EPR) in the UK: A Step Towards Sustainability",
    excerpt: "The United Kingdom is implementing a transformative approach to managing packaging waste through the Extended Producer Responsibility (EPR) system.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
    category: "EPR",
    date: "Nov 8, 2025",
    readTime: "8 min read",
    author: "Devesh Malu",
    icon: "recycle"
  },
  {
    id: 5,
    title: "China’s Circular Economy and Producer Responsibility Extension System",
    excerpt: "China's Circular Economy Promotion Law (CEPL) is a cornerstone of the country's legal framework for sustainable development.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    category: "China EPR",
    date: "Nov 5, 2025",
    readTime: "10 min read",
    author: "Devesh Malu",
    icon: "leaf"
  },
  {
    id: 6,
    title: "Extended Producer Responsibility (EPR) in India: A Complete Guide for Businesses",
    excerpt: "Extended Producer Responsibility (EPR) in India: A Complete Guide for Businesses.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop",
    category: "Business",
    date: "Nov 3, 2025",
    readTime: "6 min read",
    author: "Devesh Malu",
    icon: "leaf"
  },
  {
    id: 7,
    title: "India’s Strategic Environmental Reforms in 2025: Advancing Climate Action and Waste Management",
    excerpt: "In 2025, India has accelerated environmental reforms to drive sustainability across industries.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=400&fit=crop",
    category: "Waste Management",
    date: "Nov 1, 2025",
    readTime: "9 min read",
    author: "Devesh Malu",
    icon: "tree"
  },
  {
    id: 8,
    title: "Nature-Based Solutions: The World's Most Powerful Yet Underutilized Climate Tool",
    excerpt: "n the escalating race against climate change, the world is investing in technology: carbon capture machines, green hydrogen.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop",
    category: "Climate Tool",
    date: "Oct 28, 2025",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "tree"
  },
  {
    id: 9,
    title: "Turning Plastic Waste into Value: How Indian Brands Can Leverage Plastic Credits for Scalable Impact",
    excerpt: "India’s plastic waste challenge is no longer just an environmental concern—it’s a business imperative.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Plastic Waste",
    date: "Oct 25, 2025",
    readTime: "8 min read",
    author: "Devesh Malu",
    icon: "droplet"
  },
  {
    id: 10,
    title: "India’s Vinyl Waste Crisis: A Real Problem, A Real Opportunity",
    excerpt: "India is growing fast. With a thriving economy, a booming population, and a culture of innovation, it’s one of the world’s most dynamic nations.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=400&fit=crop",
    category: "Pollution",
    date: "Oct 22, 2025",
    readTime: "6 min read",
    author: "Devesh Malu",
    icon: "recycle"
  },
  {
    id: 11,
    title: "India’s Waste Management Landscape: Challenges, Reforms, and a Path Toward Circularity ",
    excerpt: "India’s rapid urbanization and consumption patterns have led to a steep rise in waste generation—posing significant environmental and logistical challenges.",
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=400&fit=crop",
    category: "Climate Action",
    date: "Oct 20, 2025",
    readTime: "11 min read",
    author: "Devesh Malu",
    icon: "leaf"
  },
  {
    id: 12,
    title: "Plastic-Free Living: Complete Guide",
    excerpt: "Practical strategies to eliminate single-use plastics from your life and inspire others to do the same.",
    image: "https://images.unsplash.com/photo-1591814230158-9b253036d793?w=800&h=400&fit=crop",
    category: "Zero Waste",
    date: "Oct 18, 2025",
    readTime: "10 min read",
    author: "Ocean Clean",
    icon: "recycle"
  }
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const getIcon = (iconName) => {
    const icons = {
      leaf: <Leaf className="w-4 h-4" />,
      droplet: <Droplet className="w-4 h-4" />,
      tree: <TreePine className="w-4 h-4" />,
      recycle: <Recycle className="w-4 h-4" />
    };
    return icons[iconName] || icons.leaf;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (blogId) => {
    console.log(`Navigating to blog ${blogId}`);
    // Replace with: navigate(`/blog/${blogId}`) or window.location.href = `/blog/${blogId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-emerald-600 text-white shadow-lg">
        <div className="px-4 sm:px-6 lg:px-12 py-12">
          <div className="flex items-center space-x-3 mb-3">
            <Leaf className="w-10 h-10" />
            <h1 className="text-4xl font-bold">EcoVoice Blog</h1>
          </div>
          <p className="mt-2 text-lg text-green-50">
            Inspiring stories and practical tips for a sustainable future
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-600">
          <p className="text-gray-700 leading-relaxed">
            Join us on a journey towards a greener planet. Discover actionable insights, inspiring stories, 
            and practical solutions to environmental challenges facing our world today.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <main className="px-4 sm:px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => handleBlogClick(blog.id)}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-green-100"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                    {getIcon(blog.icon)}
                    <span>{blog.category}</span>
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-green-600" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-green-600" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-green-100">
                  <span className="text-sm text-gray-700 font-medium">
                    {blog.author}
                  </span>
                 <Link
  to={blog.route}
  className="text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform cursor-pointer"
>
  Read more
  <ArrowRight className="w-4 h-4 ml-1" />
</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-green-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-green-600" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === pageNumber
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-green-300 hover:bg-green-50'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-green-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-green-600" />
          </button>
        </div>

        {/* Page Info */}
        <p className="text-center mt-4 text-gray-600">
          Showing {indexOfFirstBlog + 1} - {Math.min(indexOfLastBlog, allBlogs.length)} of {allBlogs.length} posts
        </p>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <Leaf className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Make a Difference Today</h3>
          <p className="text-green-50 mb-4">
            Every small action counts. Start your sustainability journey with us.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-md">
            Subscribe to Newsletter
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;