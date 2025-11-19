import React, { useState, useRef } from "react";
import { Briefcase, MapPin, Clock, Send, X, CheckCircle, Sparkles, TrendingUp, Users } from "lucide-react";
import emailjs from "@emailjs/browser";

const JobCard = ({ job, onApply, index }) => {
  const { title, location, type, department, description, requirements } = job;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-3xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-100/50 to-transparent rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
      
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-100 to-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide border border-green-200">
              {department}
            </span>
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-200">
              {type}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
            {title}
          </h3>

          <div className="flex items-center gap-5 text-gray-600 text-sm">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-green-500" />
              <span className="font-medium">{location}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{type}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-pulse" />
        </div>
      </div>

      <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>

      {isExpanded && (
        <div className="mb-5 p-5 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 animate-fadeIn">
          <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Requirements
          </h4>
          <ul className="space-y-2">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={() => onApply(title)}
          className="flex-1 px-6 py-3.5 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Apply Now
        </button>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3.5 bg-white border-2 border-green-200 text-green-700 rounded-xl font-bold hover:bg-green-50 hover:border-green-400 transition-all duration-300"
        >
          {isExpanded ? "Less" : "Details"}
        </button>
      </div>
    </div>
  );
};

export default function ClimetoCareers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null
  });

  const jobs = [
    {
      title: "Business Development Executive",
      location: "Vapi, Gujarat",
      type: "Hybrid",
      department: "Business Development",
      description: "Drive business growth by identifying new clients, managing relationships, and supporting sales strategies.",
      requirements: ["Experience in sales or business development", "Strong communication & negotiation skills", "Ability to manage hybrid working schedule", "Goal-oriented and self-driven attitude"],
    },
    {
      title: "Business Development Executive",
      location: "Bangalore",
      type: "Hybrid",
      department: "Business Development",
      description: "Identify opportunities, pitch services, and build strong business partnerships in the Bangalore region.",
      requirements: ["Previous BD or sales experience", "Good presentation & communication skills", "Hybrid working flexibility", "Understanding of sustainability sector (preferred)"],
    },
    {
      title: "Sustainability Executive",
      location: "Indore",
      type: "Onsite",
      department: "Sustainability",
      description: "Support sustainability projects, coordinate with stakeholders, and ensure accurate reporting and execution.",
      requirements: ["Degree in Environmental Science or related field", "Strong analytical & documentation skills", "Ability to work onsite with teams", "Passion for climate & sustainability"],
    },
    {
      title: "Business Development Manager",
      location: "Indore",
      type: "Onsite",
      department: "Business Development",
      description: "Lead the BD team, develop strategies, manage key accounts, and ensure overall business growth.",
      requirements: ["3+ years in BD or sales leadership", "Team management & strategic planning skills", "Strong relationship-building ability", "Onsite availability in Indore"],
    },
  ];

  const onApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ name: '', email: '', phone: '', message: '', resume: null });
    setTimeout(() => {
      const el = document.querySelector("#applicant-name");
      if (el) el.focus();
    }, 50);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      alert("Please fill in all required fields");
      return;
    }

    setSending(true);

    try {
      const formElement = document.createElement('form');
      const fields = {
        job: selectedJob,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.name = 'resume';
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(formData.resume);
      fileInput.files = dataTransfer.files;
      formElement.appendChild(fileInput);

      const result = await emailjs.sendForm(
        "service_a2z5zy2",
        "template_p5ivd4k",
        formElement,
        "4eY9uaRaYhI4OzB-_"
      );

      console.log("EmailJS result:", result);
      alert("Application sent successfully! We'll get back to you soon.");
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', message: '', resume: null });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send application. Please try again or email info@climeto.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-100 rounded-full text-green-700 font-semibold mb-6 animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span>We're Hiring!</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-blue-600 mb-6 leading-tight">
            Join Our Team
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Build the future of sustainability with Climeto. We're looking for passionate individuals ready to make an impact.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-3xl font-bold text-green-600 mb-1">
                <TrendingUp className="w-8 h-8" />
                <span>4</span>
              </div>
              <p className="text-gray-600 font-medium">Open Positions</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-3xl font-bold text-blue-600 mb-1">
                <Users className="w-8 h-8" />
                <span>3</span>
              </div>
              <p className="text-gray-600 font-medium">Cities</p>
            </div>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, idx) => (
            <JobCard key={idx} job={job} onApply={onApply} index={idx} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center p-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Don't see the right role?</h2>
          <p className="text-gray-600 mb-4">Send us your resume anyway! We're always looking for talented people.</p>
          <a 
            href="mailto:info@climeto.com" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-300"
          >
            Email Us
          </a>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative transform animate-slideUp max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-4">
                Application Form
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedJob}</h2>
              <p className="text-gray-600">Fill out the form below to apply for this position</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  id="applicant-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join us?</label>
                <textarea
                  name="message"
                  placeholder="Tell us about yourself and why you're interested in this role..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Resume *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors">
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-2">PDF or DOC format, max 5MB</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              Having trouble? Email your resume to <span className="font-semibold text-green-600">info@climeto.com</span> with subject: "{selectedJob} Application"
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}