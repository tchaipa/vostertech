import './App.css';
import NavBar from '../src/components/NavBar';
import Banner from '../src/components/Banner';
import AboutUs from '../src/components/AboutUs';
import Services from '../src/components/Services';
import Pictures from '../src/components/Pictures';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Registration from './components/Registration';
// import Footer from '../src/components/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <Registration/>
      <AboutUs />
      <Services />
      <Pictures />
      <FloatingWhatsApp  />
      {/* <Footer /> */}
    </div>
  
  )
}

export default App;

