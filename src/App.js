import './App.css';
// import Header from '../src/components/Header';
// import Navbar from '../src/components/Navbar';
import Navv from '../src/components/Navv';
import Banner from '../src/components/Banner';
import AboutUs from '../src/components/AboutUs';
import Services from '../src/components/Services';
import Pictures from '../src/components/Pictures';

// import Footer from '../src/components/Footer';

function App() {
  return (
    <div className='app'>
      {/* <Header /> */}
      {/* <Navbar/> */}
      <Navv/>
      <Banner/>
      <AboutUs />
      <Services />
      <Pictures />
      {/* <Footer /> */}
    </div>
  
  )
}

export default App;

