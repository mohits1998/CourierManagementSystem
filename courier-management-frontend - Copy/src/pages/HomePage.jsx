import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_2 from "../images/courier_1.png";
import travel_1 from "../images/courier_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-color">Welcome to Courier Management System</h1>
            <p>
              Welcome to our advanced Courier Management System, where
              efficiency meets excellence in every delivery. Seamlessly navigate
              through the complexities of logistics as we redefine streamlined
              operations for your business. With our innovative platform, you
              can harness the power of real-time tracking, ensuring that every
              package's journey is transparent, secure, and punctual.
            </p>
            <p>
              Say goodbye to the hassle and uncertainty of logistics management;
              say hello to a new era of reliable, efficient, and
              customer-centric courier services. Your success is our priority,
              and with our comprehensive suite of tools, you're equipped to
              exceed expectations and deliver satisfaction at every doorstep.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-color ms-5">Real-time Tracking</h1>
            <p className="ms-5">
              Incorporating cutting-edge technology, our Courier Management
              System brings the power of real-time tracking right to your
              fingertips. Gone are the days of uncertainty and wondering about
              your package's location. With our system, you're equipped with
              instant updates, allowing you to monitor every movement from
              dispatch to delivery.
            </p>
            <p className="ms-5">
              Whether it's for personal or business purposes, this level of
              transparency not only adds convenience but also helps you plan
              effectively. Embrace the ease of knowing where your shipments are
              at any given moment and experience a new dimension of reliability
              in courier services.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
