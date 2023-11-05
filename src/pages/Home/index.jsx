import React from "react";
import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";
import ServiceSection from "../../components/ServiceSection";
import ProjectSection from "../../components/ProjectSection";
import ContactSection from "../../components/ContactSection";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
