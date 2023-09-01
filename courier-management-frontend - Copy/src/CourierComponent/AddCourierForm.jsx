import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourierForm = () => {
  const [categories, setCategories] = useState([]);

  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-user"));

  const retrieveAllCategories = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/courier/categories"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await retrieveAllCategories();
      if (allCategories) {
        setCategories(allCategories);
      }
    };

    getAllCategories();
  }, []);

  const [courier, setCourier] = useState({
    courierName: "",
    receiversName: "",
    receiversAddress: "",
    receiversPincode: "",
    category: "",
    weight: "",
    userId: user.id,
  });

  const handleInput = (e) => {
    setCourier({ ...courier, [e.target.name]: e.target.value });
  };

  const saveCourier = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/user/courier/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courier),
    }).then((result) => {
      result.json().then((resCourier) => {
        console.log(resCourier);
        if (resCourier) {
          navigate("/user/courier/payment", { state: resCourier });
        }
      });
    });
  };

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          class="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 class="card-title">Add Courier</h5>
          </div>
          <div class="card-body text-color">
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Courier Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="courierName"
                  name="courierName"
                  onChange={handleInput}
                  value={courier.courierName}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Category</b>
                </label>

                <select
                  name="category"
                  onChange={handleInput}
                  className="form-control"
                  required
                >
                  <option value="">Select Category</option>

                  {categories.map((category) => {
                    return <option value={category}> {category} </option>;
                  })}
                </select>
              </div>

              <div class="mb-3 mt-1">
                <label for="quantity" class="form-label">
                  <b>Receiver Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="receiversName"
                  name="receiversName"
                  onChange={handleInput}
                  value={courier.receiversName}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">
                  <b>Receiver Address</b>
                </label>
                <textarea
                  class="form-control"
                  id="receiversAddress"
                  name="receiversAddress"
                  rows="3"
                  onChange={handleInput}
                  value={courier.receiversAddress}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">
                  <b>Receiver Pincode</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="receiversPincode"
                  name="receiversPincode"
                  onChange={handleInput}
                  value={courier.receiversPincode}
                  required
                />
              </div>

              <div class="mb-3 mt-1">
                <label for="quantity" class="form-label">
                  <b>Weight</b>
                </label>
                <input
                  placeholder="Enter weight in kg"
                  type="number"
                  class="form-control"
                  id="weight"
                  name="weight"
                  onChange={handleInput}
                  value={courier.weight}
                  required
                />
              </div>

              <button
                type="submit"
                class="btn bg-color custom-bg-text"
                onClick={saveCourier}
              >
                Add Courier
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourierForm;
