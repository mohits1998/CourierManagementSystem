import Header from '../components/Header'

import User from "../image/User.png";

import login from '../image/login.png'


const AboutScreen = (props) => {
  return (
    // <div>
    //   <Header title="About" />
    // </div>
    <div style={{ textAlign: "center", marginTop: 40 }}>
    <h5>
      <b style={{ fontSize: 80, color: "#5C41A8" }}>EcomRace</b>
    </h5>
    <div
      className="container"
      style={{
        textAlign: "justify",
        fontFamily: "sans-serif",
        textIndent: 30,
        fontStyle: "italic",
      }}
    >
      <p><h3>
      CMS is a web-based Courier Management System that supports the high accessibility
      of courier services to the corporate and to the customer.
      The system is being used for day-to-day activities such as booking a courier,
      maintain hub details, maintain company details, process data of businesses,
      and many other things.
      </h3></p>
    </div>
    <hr />
    <div className="container" style={{  }}>
      <h4 style={{ marginLeft: -10 }}>Contact Us</h4>
      <div
        className="row"
        style={{  marginTop: 50}}
      >
        <div className="col"style={{marginLeft: 200,marginRight: 200 }}>
          
          <img
            src={User}
            className="card-img-top"
            style={{
              height: 250,
              width: 200,
              boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
              display: "block",
              borderRadius: 5,
            }}
            alt="..."
          />
          <div style={{ marginLeft: -200, marginTop: 10 }}>
            {" "}
            <h5 style={{ textAlign: "center" }}>Mohit Suryavanshi</h5>
          </div>
          <div
            style={{
              marginLeft: -190,
              marginTop: 10,
              marginBottom: 20,
              color: "blue",
            }}
          >
            {" "}
            <h7 style={{ textAlign: "center" }}>mohitsuryavanshi532@gmail.com</h7>
          </div>
        </div>
        <div className="col">
          <img
            src={User}
            className="card-img-top"
            style={{
              height: 250,
              width: 200,
              boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
              display: "block",
              borderRadius: 5,
            }}
            alt="..."
          />
          <div style={{ marginLeft: -200, marginTop: 10 }}>
            {" "}
            <h5 style={{ textAlign: "center" }}>Pankaj Chavan</h5>
          </div>
          <div
            style={{
              marginLeft: -190,
              marginTop: 10,
              marginBottom: 20,
              color: "blue",
            }}
          >
            {" "}
            <h7 style={{ textAlign: "center" }}>pankajchavan3545@gmail.com</h7>
          </div>
        </div>
        <div className="col"style={{marginLeft: 200,marginRight: 200 }}>
          <img
            src={User}
            className="card-img-top"
            style={{
              height: 250,
              width: 200,
              boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
              display: "block",
              borderRadius: 5,
            }}
            alt="..."
          />
          <div style={{ marginLeft: -200, marginTop: 10 }}>
            {" "}
            <h5 style={{ textAlign: "center" }}>Roahn Patil</h5>
          </div>
          <div
            style={{
              marginLeft: -190,
              marginTop: 10,
              marginBottom: 20,
              color: "blue",
            }}
          >
            {" "}
            <h7 style={{ textAlign: "center" }}>rohanpatil7848@gmail.com</h7>
          </div>
        </div>
        <div className="col">
          <img
            src={User}
            className="card-img-top"
            style={{
              height: 250,
              width: 200,
              boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
              display: "block",
              borderRadius: 5,
            }}
            alt="..."
          />
          <div style={{ marginLeft: -210, marginTop: 10 }}>
            {" "}
            <h5 style={{ textAlign: "center" }}>Rajeshwar Pasare</h5>
          </div>
          <div
            style={{
              marginLeft: -190,
              marginTop: 10,
              marginBottom: 20,
              color: "blue",
            }}
          >
            {" "}
            <h7 style={{ textAlign: "center" }}>rajeshwarpasare99@gmail.com</h7>
          </div>
        </div>
        <div className="col"style={{marginLeft: 500}}>
          <img
            src={User}
            className="card-img-top"
            style={{
              height: 250,
              width: 200,
              boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
              display: "block",
              borderRadius: 5,
            }}
            alt="..."
          />
          <div style={{ marginLeft: -550, marginTop: 10 }}>
            {" "}
            <h5 style={{ textAlign: "center" }}>Aashish Nikumb</h5>
          </div>
          <div
            style={{
              marginLeft: -550,
              marginTop: 10,
              marginBottom: 20,
              color: "blue",
            }}
          >
            {" "}
            <h7 style={{ textAlign: "center" }}>Aashishnikumb69@gmail.com</h7>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default AboutScreen
