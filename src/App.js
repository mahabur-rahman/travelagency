// global css
import "./global.scss";
// components
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Destination from "./components/Destination/Destination";
import Booking from "./components/Booking/Booking";
import Testimonial from "./components/Testimonial/Testimonial";
import Company from "./components/Company/Company";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Destination />
      <Booking />
      <Testimonial />
      <Company />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
