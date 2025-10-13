import React, { useState } from 'react';

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    portfolio: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body
    const mailtoLink = `mailto:info@climeto.com?subject=Job Application - ${formData.position} - ${formData.fullName}&body=
Full Name: ${formData.fullName}%0D%0A
Email: ${formData.email}%0D%0A
Phone: ${formData.phone}%0D%0A
Position Applied For: ${formData.position}%0D%0A
Years of Experience: ${formData.experience}%0D%0A
LinkedIn Profile: ${formData.linkedin}%0D%0A
Portfolio/Website: ${formData.portfolio}%0D%0A
%0D%0A
Cover Letter:%0D%0A
${formData.message}
    `;
    
    window.location.href = mailtoLink;
  };

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation packages"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical coverage"
    },
    {
      icon: "🏖️",
      title: "Flexible Leave",
      description: "Generous vacation and personal time off"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Professional training support"
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible work arrangements"
    },
    {
      icon: "🌱",
      title: "Growth Opportunities",
      description: "Clear career progression paths"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 opacity-95"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-lg font-semibold mb-6 border border-white border-opacity-30">
            🚀 Join Our Mission
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Build a Sustainable Future with Climeto
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join India's leading environmental consultancy and make a real impact on climate change. We're always looking for passionate individuals to join our team.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Join Climeto?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of a team that's shaping India's sustainability landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-blue-400">
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Make Real Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Work on projects that directly contribute to India's net-zero goals and environmental protection
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-blue-400">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rapid Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Fast-track your career in the booming sustainability sector with clear advancement paths
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-blue-400">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Collaborative Culture</h3>
              <p className="text-slate-600 leading-relaxed">
                Work with passionate experts in a supportive environment that values innovation and teamwork
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
       
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Apply Now</h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you soon
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-blue-100">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              {/* Position and Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Position Applied For <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    placeholder="e.g., Environmental Consultant"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    placeholder="e.g., 3-5 years"
                    required
                  />
                </div>
              </div>

              {/* LinkedIn and Portfolio */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Cover Letter / Why do you want to join Climeto? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 resize-none"
                  placeholder="Tell us about yourself, your experience, and why you'd be a great fit for Climeto..."
                  required
                ></textarea>
              </div>

              {/* Note about Resume */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>📎 Note:</strong> Please attach your resume/CV when sending the email. We accept PDF, DOC, or DOCX formats.
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Submit Application</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-sm text-slate-600 text-center">
                By submitting this form, your default email client will open with a pre-filled email to info@climeto.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
          <p className="text-xl mb-8 text-white/90">
            Feel free to reach out to us for any queries about career opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@climeto.com" className="hover:underline">info@climeto.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919039946410" className="hover:underline">+91-90399 46410</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}