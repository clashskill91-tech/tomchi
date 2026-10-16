import { useEffect } from 'react';
import { initEngine } from './engine.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Intro from './components/Intro.jsx';
import Story from './components/Story.jsx';
import MapSection from './components/MapSection.jsx';
import Simulator from './components/Simulator.jsx';
import Consequences from './components/Consequences.jsx';
import Learn from './components/Learn.jsx';
import Sources from './components/Sources.jsx';
import Footer from './components/Footer.jsx';
import Dialog from './components/Dialog.jsx';

let started = false;

export default function App() {
  useEffect(() => {
    if (!started) { started = true; initEngine(); }
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Story />
      <MapSection />
      <Simulator />
      <Consequences />
      <Learn />
      <Sources />
      <Footer />
      <Dialog />
    </>
  );
}
