import React, { useState, useEffect } from 'react';

import {  About  } from './/sections';

import {  Hero } from './/sections';
import {  Projects } from './sections';
import {  Footer } from './sections';
import {  Loader } from './sections';
import {  Contact } from './sections';
import { NavigationBar } from './components';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Loader style={isLoading ? {} : { opacity: 0, visibility: 'hidden' }} />
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}
