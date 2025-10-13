import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isEPROpen, setIsEPROpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsCreditsOpen(false);
    setIsEPROpen(false);
  };

  return (
    <header style={{
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '12px 0',
      fontFamily: 'Arial, sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 999
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        gap: '40px'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <img 
            src="/Climeto-Transparent.png" 
            alt="Climeto Logo" 
            style={{ height: '70px', margin: 0 }}
          />
        </div>

        {/* Hamburger Menu */}
        <div 
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '28px',
            height: '22px',
            cursor: 'pointer'
          }}
          className="hamburger"
        >
          <div style={{
            height: '3px',
            width: '100%',
            backgroundColor: '#1b355e',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <div style={{
            height: '3px',
            width: '100%',
            backgroundColor: '#1b355e',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1
          }} />
          <div style={{
            height: '3px',
            width: '100%',
            backgroundColor: '#1b355e',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }} />
        </div>

        {/* Navigation */}
        <nav style={{
          display: isMobileMenuOpen ? 'flex' : 'flex',
          alignItems: 'center',
          gap: '24px',
          marginLeft: '20px'
        }} className="nav-links">
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            onClick={closeMobileMenu}
            style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div 
            className="dropdown"
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              style={{
                background: 'none',
                color: '#1b355e',
                border: 'none',
                fontSize: '15px',
                fontWeight: '500',
                padding: '6px 10px',
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Services <span style={{ fontSize: '10px' }}>▼</span>
            </button>
            
            <div style={{
              display: isServicesOpen ? 'block' : 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: 'white',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              borderRadius: '10px',
              minWidth: '220px',
              zIndex: 100,
              padding: '10px 0'
            }} className="dropdown-menu">
              <Link 
                to="/plastic" 
                onClick={closeMobileMenu}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#1b355e',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                  e.target.style.color = '#36a852';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1b355e';
                }}
              >
                Plastic Stewardship Program
              </Link>

              {/* Credits Submenu */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsCreditsOpen(true)}
                onMouseLeave={() => setIsCreditsOpen(false)}
              >
                <button
                  onClick={() => setIsCreditsOpen(!isCreditsOpen)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '10px 20px',
                    color: '#1b355e',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Credits <span>›</span>
                </button>
                
                <div style={{
                  display: isCreditsOpen ? 'block' : 'none',
                  position: 'absolute',
                  top: 0,
                  left: '100%',
                  minWidth: '180px',
                  backgroundColor: 'white',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  padding: '6px 0',
                  marginLeft: '5px'
                }} className="submenu">
                  <Link 
                    to="/green-credits" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    Green Credits
                  </Link>
                  <Link 
                    to="/carbon-credits" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    Carbon Credits
                  </Link>
                  <Link 
                    to="/plastic-credits" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    Plastic Credits
                  </Link>
                </div>
              </div>

              {/* EPR Submenu */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsEPROpen(true)}
                onMouseLeave={() => setIsEPROpen(false)}
              >
                <button
                  onClick={() => setIsEPROpen(!isEPROpen)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '10px 20px',
                    color: '#1b355e',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  EPR <span>›</span>
                </button>
                
                <div style={{
                  display: isEPROpen ? 'block' : 'none',
                  position: 'absolute',
                  top: 0,
                  left: '100%',
                  minWidth: '180px',
                  backgroundColor: 'white',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  padding: '6px 0',
                  marginLeft: '5px'
                }} className="submenu">
                  <Link 
                    to="/epr-battery" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    EPR Battery
                  </Link>
                  <Link 
                    to="/epr-plastic" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    EPR Plastic
                  </Link>
                  <Link 
                    to="/epr-tyre" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    EPR Tyre
                  </Link>
                  <Link 
                    to="/epr-waste" 
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    EPR E-Waste
                  </Link>
                </div>
              </div>

              <Link 
                to="/carbon" 
                onClick={closeMobileMenu}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#1b355e',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                  e.target.style.color = '#36a852';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1b355e';
                }}
              >
                Carbon Offsets
              </Link>
              <Link 
                to="/netzero" 
                onClick={closeMobileMenu}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#1b355e',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                  e.target.style.color = '#36a852';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1b355e';
                }}
              >
                Net Zero Achievement
              </Link>
            </div>
          </div>

          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Contact Us
          </Link>
          
          <Link 
            to="/blog" 
            onClick={closeMobileMenu}
            style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Blog
          </Link>
          
          <Link 
            to="/career" 
            onClick={closeMobileMenu}
            style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Career
          </Link>
        </nav>

        <style>{`
          @media (max-width: 992px) {
            .hamburger {
              display: flex !important;
            }
            
            .nav-links {
              display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
              flex-direction: column;
              gap: 10px !important;
              background-color: white;
              position: absolute;
              top: 80px;
              left: 0;
              width: 100%;
              padding: 20px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              margin-left: 0 !important;
            }
            
            .dropdown-menu {
              position: relative !important;
              box-shadow: none !important;
              padding-left: 20px !important;
            }
            
            .submenu {
              position: relative !important;
              left: 0 !important;
              margin-left: 20px !important;
              box-shadow: none !important;
            }
          }
          
          @media (max-width: 768px) {
            .nav-logo img {
              height: 60px !important;
            }
          }
          
          @media (max-width: 480px) {
            .nav-logo img {
              height: 50px !important;
            }
          }
        `}</style>
      </div>
    </header>
  );
};

export default Navbar;