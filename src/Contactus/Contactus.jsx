import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import indoreImg from "../assets/images/india.jpg";
import brazilImg from "../assets/images/brazil.jpg";
import usaImg from "../assets/images/usa.jpg";
import qatarImg from "../assets/images/qatar.jpg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ⭐ UPDATED — EmailJS Submit
  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in required fields: Name, Email, Message");
      return;
    }

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_a2z5zy2",     // Service ID
        "template_p5ivd4k",    // Template ID
        templateParams,
        "4eY9uaRaYhI4OzB-_"    // Public Key
      );

      alert("Message sent successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }
  };

  const offices = [
    {
      image: indoreImg,
      title: "Indore (HQ), India",
      phone: "+91-9039946410",
    },
    {
      image: brazilImg,
      title: "Votuporanga, São Paulo, Brazil",
      phone: "+55 69 9946-0808",
    },
    {
      image: usaImg,
      title: "California, USA",
      phone: "+1 (712) 204-0143",
    },
    {
      image: qatarImg,
      title: "Middle East (Qatar)",
      phone: "+97-444757270",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Banner */}
      <section
        style={{
          position: "relative",
          height: isMobile ? "300px" : "384px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: "896px",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "32px" : isTablet ? "42px" : "56px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
          >
            Get in Touch with Us
          </h1>
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              color: "rgba(255, 255, 255, 0.95)",
              lineHeight: "1.6",
            }}
          >
            We'd love to hear from you! Let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "40px 16px" : isTablet ? "50px 20px" : "64px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: !isMobile && !isTablet ? "1fr 1fr" : "1fr",
            gap: isMobile ? "32px" : "48px",
          }}
        >
          {/* Left: Offices */}
          <div>
            <h2
              style={{
                fontSize: isMobile ? "28px" : "36px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: isMobile ? "24px" : "32px",
              }}
            >
              Our Offices
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              {offices.map((office, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    transition: "box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={office.image}
                    alt={office.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#111827",
                      marginBottom: "8px",
                    }}
                  >
                    {office.title}
                  </h3>
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                    style={{
                      color: "#16a34a",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Email Contact */}
            <div
              style={{
                marginTop: "32px",
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Email Us
              </h3>
              <a
                href="mailto:info@climeto.com"
                style={{
                  color: "#2563eb",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                info@climeto.com
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            style={{
              backgroundColor: "white",
              padding: isMobile ? "24px" : "32px",
              borderRadius: "12px",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              height: "fit-content",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "28px" : "36px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: isMobile ? "24px" : "32px",
              }}
            >
              Send Us a Message
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                style={textareaStyle}
              ></textarea>

              <button
                type="button"
                onClick={handleSubmit}
                style={buttonStyle}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "16px",
  outline: "none",
  transition: "all 0.3s ease",
  boxSizing: "border-box",
};

const textareaStyle = {
  ...inputStyle,
  height: "140px",
  resize: "none",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#2563eb",
  color: "white",
  fontWeight: "600",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};

