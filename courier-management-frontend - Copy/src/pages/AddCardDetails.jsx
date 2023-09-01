import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddCardDetails = () => {
  const location = useLocation();
  const resCourier = location.state;

  console.log(resCourier);

  let navigate = useNavigate();

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    validThrough: "",
    cvv: "",
  });

  const handleCardInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const validateCardNumber = (cardNumber) => {
    const regex = /^[0-9]{16}$/; // Modify the regular expression as needed
    return regex.test(cardNumber);
  };

  const validateExpiryDate = (expiryDate) => {
    const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Months are zero-indexed

  // The expiry date format should be "MM/YY"
  const parts = expiryDate.split("/");
  if (parts.length !== 2) {
    return false;
  }

  const expiryMonth = parseInt(parts[0], 10);
  const expiryYear = parseInt(parts[1], 10) + 2000; // Assuming it's a 2-digit year

  // Check if expiry year and month are valid
  if (
    isNaN(expiryMonth) ||
    isNaN(expiryYear) ||
    expiryMonth < 1 ||
    expiryMonth > 12 ||
    expiryYear < currentYear ||
    (expiryYear === currentYear && expiryMonth < currentMonth)
  ) {
    return false;
  }

  return true;
  };

  const validateCVV = (cvv) => {
    const regex = /^[0-9]{3}$/; // Modify the regular expression as needed
    return regex.test(cvv);
  };

  const payForOrder = (e) => {
    e.preventDefault();
   
    if (!validateCardNumber(card.cardNumber)) {
      toast.error("Invalid card number", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!validateExpiryDate(card.validThrough)) {
      toast.error("Invalid expiry date", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!validateCVV(card.cvv)) {
      toast.error("Invalid CVV", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    fetch("http://localhost:8080/api/user/courier/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resCourier),
    }).then((result) => {
      result.json().then((res) => {
        if (res) {
          toast.success("Courier Added Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate("/user/mycourier");
          }, 3000); // Redirect after 3 seconds
        }
      });
    });
  };

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div class="card form-card border-color" style={{ width: "25rem" }}>
          <div className="card-header bg-color custom-bg-text">
            <h5 class="card-title text-center">Payment Details</h5>
          </div>
          <div class="card-body text-color custom-bg">
            <form onSubmit={payForOrder}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  <b> Name on Card</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="cardName"
                  onChange={handleCardInput}
                  value={card.cardName}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="cardNumber" class="form-label">
                  <b> Card Number</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={handleCardInput}
                  value={card.cardNumber}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="validThrough" class="form-label">
                  <b>Valid Through</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validThrough"
                  name="validThrough"
                  onChange={handleCardInput}
                  value={card.validThrough}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="cvv" class="form-label">
                  <b>CVV</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cvv"
                  name="cvv"
                  onChange={handleCardInput}
                  value={card.cvv}
                  required
                />
              </div>

              <input
                type="submit"
                class="btn custom-bg-text bg-color"
                value={"Pay Rs " + resCourier.price}
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCardDetails;
