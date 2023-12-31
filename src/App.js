import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Welcome from './Component/Welcome';
import AutoSlideCarousel from './Component/AutoSlideCarousel';
import './Component/GlobalStyles.css'


function App() {
  const carouselItems = [
    {     
      image: '/my_portfolio/1.png',
    },
    {
      image: '/my_portfolio/2.png',
    },
    {
      image: '/my_portfolio/3.png',
    },
    {
      image: '/my_portfolio/4.png',
    },
    {
      image: '/my_portfolio/5.png',
    },
    {
      image: '/my_portfolio/6.png',
    },
  ];
  return (
    <>
      <Header />
      <AutoSlideCarousel items={carouselItems} interval={5000} />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
