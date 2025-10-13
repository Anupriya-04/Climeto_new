import React from "react";
import "./AboutUs.css";

// Team images
import Devesh from "../assets/images/Devesh.png";
import Keshav from "../assets/images/Keshav.png";
import Harsh from "../assets/images/Harsh.png";
import Rajeev from "../assets/images/Rajeev.png";
import Deepal from "../assets/images/Deepal.png";
import Anurag from "../assets/images/Anurag.png";
import Deepak from "../assets/images/Deepak.png";
import Ginja from "../assets/images/gunja.png";

// Gallery / Journey images
import a1 from "../assets/images/a1.jpeg";
import a2 from "../assets/images/a2.jpg";
import a3 from "../assets/images/a3.jpg";
import a4 from "../assets/images/a4.jpeg";
import a5 from "../assets/images/a5.jpg";
import a6 from "../assets/images/a6.jpg";
import a7 from "../assets/images/a7.jpg";
import a8 from "../assets/images/a8.jpeg";
import aboutbanner from "../assets/images/aboutbanner.jpg";

const teamMembers = [
  { name: "Devesh Malu", role: "Founder & Project Development Director", img: Devesh },
  { name: "Keshav Bhootda", role: "Founder & Client Relationship Director", img: Keshav },
  { name: "Harsh Maloo", role: "Country Head & EPR Business Development", img: Harsh },
  { name: "Rajeev Baijal", role: "Business Development - Senior Manager", img: Rajeev },
  { name: "Deepal Raj Jain", role: "Assistant Manager - Project Development", img: Deepal },
  { name: "Anurag Singh", role: "EPR Operation Executive", img: Anurag },
  { name: "Deepak  Suryavanshi ", role: "EPR Operations Senior Executive", img: Deepak },
  { name: "Gunja  Sakhare", role: "EPR Operations Executive", img: Ginja },
];

const galleryImages = [a1, a2, a3, a4, a5, a6, a7, a8];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>About Climeto</h1>
            <p className="lede">
              We are committed to driving climate-positive initiatives by
              empowering organizations to measure, reduce, and offset their
              carbon footprint through technology and innovation.
            </p>
          </div>
          <div className="hero-image">
            <img src={aboutbanner} alt="About Climeto Banner" />
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <h2>Leadership & Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR JOURNEY SLIDER */}
      <section className="gallery">
        <h2>Our Journey</h2>
        <div className="journey-slider">
          <div className="slider-track">
            {galleryImages.map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt={`Journey ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
