import Footer from '../../Components/Footer/footer';
import Hero from '../../Components/Hero/hero';
import Parts from '../../Components/Parts/parts';
import Services from '../../Components/Services/service';
import Testimonial from '../../Components/testimonial/testimonial';
import Gallery from '../../Components/Work/gallery';
import './home.css';

const Home = () => {
  return <>
  <Hero/>
  <Services/>
  <Parts/>
  <Gallery/>
  <Testimonial/>
  <Footer/>
  </>
};

export default Home;
