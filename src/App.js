// import logo from './logo.svg';
import './App.css';
import Home from './Routes/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Sections/Section1/Section1';
import Section2 from './Sections/Section2/Section2';
import Section3 from './Sections/Section3/Section3';
import Faq from './Sections/Faq/Faq';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
    
     
      <Navbar />
      <Home />
      <Section1 />
      <Section2 />
      <Section3 />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
