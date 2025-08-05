// src/pages/CV/CV.jsx
import React from 'react';
import Header from "../components/CV/Header";
import Profile from "../components/CV/Profile";
import Experience from "../components/CV/Experience";
import Portfolio from "../components/CV/Portfolio";
import ContactForm from "../components/CV/ContactForm";

function CV() {
  return (
    <>
      <Header />
      <Profile />
      <Experience />
      <Portfolio />
      <ContactForm />
    </>
  );
}

export default CV;