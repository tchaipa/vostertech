import './App.css';
import NavBar from '../src/components/Navbar';
import Banner from '../src/components/Banner';
import AboutUs from '../src/components/AboutUs';
import Project from './components/Project';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import Footer from '../src/components/Footer';
import WhyUs from './components/WhyUs';
// import Accordions from './components/Accordions';
// import { Routes, Route, Switch } from 'react-router-dom';
// import FaqPage from './components/FaqPage';
// import { Router } from 'express';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <AboutUs />
      <Project/>
      <FloatingWhatsApp  />
      <WhyUs/>
      <Registration/>
      <FAQ/>
      {/* <Accordions/> */}
      <Newsletter/>
      <Footer />
      {/* <Switch>
        <Route path="faqpage" element={<FaqPage />} />
      </Switch> */}
      
      
    </div>
  
  )
}

export default App;

