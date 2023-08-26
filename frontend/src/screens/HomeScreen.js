import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import login from '../image/login.png'


//import 'react-slideshow-image/dist/styles.css';

const HomeScreen = () => {
  return (
       <div className="bg_image"
      style={{
        backgroundImage: 'url('+login+')',
         backgroundSize: "cover",
        height: "80vh",
        color: "black"
      }}>   
      <div className="well">
      <div className="jumbotron jumbotron-fluid ">
        <h1 className="display-4">Hello !</h1>
        <h2 className="display-4">Welcome to </h2> 
        <h5>
      <b style={{ fontSize: 80, color: "#5C41A8" }}>EcomRace</b>
    </h5>
        {/* <h2 className="display-4">Welcome to Courier Management System</h2> */}
        <p className="lead">bringing Growth through on time Delivery.</p>
        <div className="my-4">
          <p>Couriers are responsible for distributing packages and documents for institutions, businesses, government agencies, and individuals. They pick up documents and packages from customer´s offices or houses and then deliver them to final destinations within the same area.</p>
          <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
        </div>
        </div>
        </div>
        </div>
       
          
     
    
);
}



export default HomeScreen
