import React from "react";
import "./Bluesection.css";
import blogImg from "../assets/images/blog.png";
import guidelineImg from "../assets/images/guideline.jpg";
import treeImg from "../assets/images/tree.jpg";
//import RevisedGuidePage from "../Blog/Revicedguide";
//import blog from "./Blog/Blog";
import { useNavigate } from 'react-router-dom';
export default function Bluesection() {
   const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore-more");
    window.scrollTo(0, 0); // optional scroll to top
  };
  const blogs = [
    {
      id: 1,
      title: "Article 6 of the Paris Agreement & Carbon Markets: Detailed Guide for 2025",
      image: blogImg,
      link: "/paris",
      featured: true,
    },
    {
      id: 2,
      title:
        "Revised Guidelines for Environmental Compensation on Plastic Waste Management Violations",
      image: guidelineImg,
      link:"/India-Strategy",
    },
    {
      id: 3,
      title:
        "India’s commitment to achieving net-zero emissions by 2070",
      image: treeImg,
      link: "/Nature-based",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Left (Main Article) */}
        <div className="main-article">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="main-img"
          />
          <a href={blogs[0].link} className="main-link">
            {blogs[0].title}
          </a>
        </div>

        {/* Right (Side Articles) */}
        <div className="side-articles">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="side-article">
              <img src={blog.image} alt={blog.title} className="side-img" />
              <a href={blog.link} className="side-link">
                {blog.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Button */}
     <div className="explore-btn-wrapper">
      
    </div>

    </section>
  );
}
