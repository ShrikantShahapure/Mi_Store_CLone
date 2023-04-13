import PreNavbar from './components/PreNavbar';
import './App.css'
import Navbar from './components/Navbar.js';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import Banner from './components/Banner';
import Footer from './components/Footer';

// Import pkg from 'data/data.json'

function App() {

  const banner = data.banner

  return (
    <Routes>

      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />

      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />


        <a exact path="/music"/>
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        <a exact path="/smartDevice"/>
        <Heading text="TOP SELLEING" />
        <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        <Heading text="TOP PRODUCT REVIEWS" />
        <HotAccessories productReviews={data.hotAccessories.productReviews} productReviewsCover={data.hotAccessoriesCover.productReviews} />
        <Heading text="IN THE PRESS NEWS" />
        <Banner banner={data.banner} />
        <Footer footer={data.footer}/>
    </Routes>
  )
}

export default App;

