import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Welcome from './Component/Welcome';
import AutoSlideCarousel from './Component/AutoSlideCarousel';
import './Component/GlobalStyles.css'


function App() {
  const carouselItems = [
    {     
      image: '1.png',
    },
    {
      image: '2.png',
    },
    {
      image: '3.png',
    },
    {
      image: '4.png',
    },
    {
      image: '5.png',
    },
    {
      image: '6.png',
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
