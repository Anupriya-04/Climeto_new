import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/home";
import AboutUs from './AboutUs/AboutUs.jsx';
import Blog from "./Blog/Blog";
import RevisedGuidePage from "./Blog/Revicedguide.jsx";
import IndiaCommitmentPage from "./Blog/Indiacommitment.jsx";
import Career from "./Career/Career";
import Contactus from "./Contactus/Contactus.jsx";
import Footer from "./footer/footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop.jsx";
import ClimetoMedia from "./Climetomedia.jsx";
// Credits
import CarbonCredits from "./Services/Credits/CarbonCredits";
import GreenCredits from "./Services/Credits/greenCredits.jsx";
import PlasticCredits from "./Services/Credits/plasticCredits";

// EPR
import EPRbattery from "./Services/EPR/EPRbattery";
import EPRplastic from "./Services/EPR/EPRplastic";
import EPRtyre from "./Services/EPR/EPRtyre";
import EPRwaste from "./Services/EPR/EPRwaste";

// Other Services
import Carbon from "./Services/carbon";
import Netzero from "./Services/Netzero";
import Plastic from "./Services/Plastic";

//blogs pages


import Article6Blog from "./Blog/paris";
import CarbonMarketLanding from "./Blog/Carbonmarket";
import Cpcbsimp from "./Blog/cpcbsimp";
import Extendedproducer from "./Blog/Extendesproducer";
import Indiawaste from "./Blog/IndiaWaste";
import Chinaepr from "./Blog/Chinaepr";
import VinylIndia from "./Blog/Vinylindia";
import Turningplastic from "./Blog/Turningplastic";
import EPRindia from "./Blog/EPRindia";
import Indiastrategy from "./Blog/Indiastrategy";
import Naturebased from "./Blog/Naturebased";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/climeto-media" element={<ClimetoMedia />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contactus />} />
          <Route path="/revised-guide" element={<RevisedGuidePage />} />
          <Route path="/india-commitment" element={<IndiaCommitmentPage/>}/>
        {/* Credits */}
        <Route path="/carbon-credits" element={<CarbonCredits />} /> 
        <Route path="/green-credits" element={<GreenCredits />} />
        <Route path="/plastic-credits" element={<PlasticCredits />} />

        {/* EPR */}
        <Route path="/epr-battery" element={<EPRbattery />} />
        <Route path="/epr-plastic" element={<EPRplastic />} />
        <Route path="/epr-tyre" element={<EPRtyre />} />
        <Route path="/epr-waste" element={<EPRwaste />} />

        {/* Other */}
        <Route path="/carbon" element={<Carbon />} />
        <Route path="/netzero" element={<Netzero />} />
        <Route path="/plastic" element={<Plastic />} />

  {/* Blog */}
     <Route path="/paris" element={<Article6Blog />} />
     <Route path="/carbonMarketLanding" element={<CarbonMarketLanding />} />
     <Route path="/cpcbsimp" element={<Cpcbsimp />}/>
          <Route path="/extended-producer" element={<Extendedproducer />}/>
              <Route path="/India-Waste-Management" element={<Indiawaste />}/>
  <Route path="/China-EPR" element={<Chinaepr />}/>
 <Route path="/Vinyl-India" element={<VinylIndia />}/>
      <Route path="/Turning-platic" element={<Turningplastic />}/>
        <Route path="/EPR-india" element={<EPRindia />}/>
         <Route path="/India-Strategy" element={<Indiastrategy />}/>
         <Route path="/Nature-based" element={<Naturebased />}/>
     
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
