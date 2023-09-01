import { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const AssignDeliveryToOrders = () => {
  const [courierId, setCourierId] = useState("");
  const [allCourier, setAllCourier] = useState([]);
  const [deliveryPersons, setDeliveryPersons] = useState([]);

  const [assignDelivery, setAssignDelivery] = useState({
    courierId: "",
    deliveryId: "",
  });

  const handleInput = (e) => {
    setAssignDelivery({ ...assignDelivery, [e.target.name]: e.target.value });
  };

  const retrieveAllDeliveryPerson = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/deliveryperson/all"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllDeliveryPerson = async () => {
      const allDeliveryStatus = await retrieveAllDeliveryPerson();
      if (allDeliveryStatus) {
        setDeliveryPersons(allDeliveryStatus);
      }
    };

    getAllDeliveryPerson();
  }, []);

  const getAllCourier = async () => {
    const allOrder = await retrieveAllOrder();
    if (allOrder) {
      setAllCourier(allOrder);
    }
  };

  const retrieveAllOrder = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/courier/admin/showCourier?courierId=" +
        courierId
    );
    console.log(response.data);
    return response.data;
  };

  const searchOrderById = (e) => {
    getAllCourier();
    setCourierId("");
    e.preventDefault();
  };

  const assignDeliveryToOrders = (e) => {
    fetch("http://localhost:8080/api/user/courier/admin/order/assignDelivery", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignDelivery),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log("response", res);

        setAllCourier(res);
      });
    });
    setAssignDelivery({
      courierId: "",
      deliveryId: "",
    });
    e.preventDefault();
  };

  return (
    <div>
      <div
        className="card form-card mt-1 ms-2 me-2 mb-2 custom-bg border-color"
        style={{
          height: "35rem",
        }}
      >
        <div className="card-header text-center bg-color custom-bg-text">
          <h4>Searh Customer Couriers</h4>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <form class="row g-3">
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Enter Courier Id..."
                onChange={(e) => setCourierId(e.target.value)}
                value={courierId}
              />
            </div>
            <div class="col-auto">
              <button
                type="submit"
                class="btn bg-color custom-bg-text mb-3"
                onClick={searchOrderById}
              >
                Search
              </button>
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-hover text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Courier Id</th>
                  <th scope="col">Courier Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Courier Date</th>
                  <th scope="col">Sender Name</th>
                  <th scope="col">Sender Mobile</th>
                  <th scope="col">Sender Address</th>
                  <th scope="col">Receiver Name</th>
                  <th scope="col">Receiver Address</th>
                  <th scope="col">Receiver Pincode</th>
                  <th scope="col">Delivery Person</th>
                  <th scope="col">Delivery Mobile No</th>
                  <th scope="col">Delivery Assigned</th>
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Delivery Time</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col">Delivery Price</th>
                  <th scope="col">Payment Status</th>
                </tr>
              </thead>
              <tbody className="text-color">
                {allCourier.map((courier) => {
                  return (
                    <tr>
                      <td>
                        <b>{courier.courierId}</b>
                      </td>

                      <td>
                        <b>{courier.courierName}</b>
                      </td>
                      <td>
                        <b>{courier.category}</b>
                      </td>
                      <td>
                        <b>{courier.weight}</b>
                      </td>
                      <td>
                        <b>{courier.courierDate}</b>
                      </td>
                      <td>
                        <b>
                          {courier.user.firstName + " " + courier.user.lastName}
                        </b>
                      </td>
                      <td>
                        <b>{courier.user.phoneNo}</b>
                      </td>
                      <td>
                        <b>
                          {courier.user.address.street +
                            " " +
                            courier.user.address.city}
                        </b>
                      </td>
                      <td>
                        <b>{courier.receiversName}</b>
                      </td>
                      <td>
                        <b>{courier.receiversAddress}</b>
                      </td>
                      <td>
                        <b>{courier.receiversPincode}</b>
                      </td>

                      {(() => {
                        if (courier.deliveryAssigned === "Yes") {
                          return (
                            <td>
                              <b>
                                {courier.deliveryPerson.firstName +
                                  " " +
                                  courier.deliveryPerson.lastName}
                              </b>
                            </td>
                          );
                        } else {
                          return (
                            <td>
                              <b>Not Assigned</b>
                            </td>
                          );
                        }
                      })()}
                      {(() => {
                        if (courier.deliveryAssigned === "Yes") {
                          return (
                            <td>
                              <b>{courier.deliveryPerson.phoneNo}</b>
                            </td>
                          );
                        } else {
                          return (
                            <td>
                              <b>Not Assigned</b>
                            </td>
                          );
                        }
                      })()}
                      <td>
                        <b>{courier.deliveryAssigned}</b>
                      </td>
                      <td>
                        <b>{courier.deliveryDate}</b>
                      </td>
                      <td>
                        <b>{courier.deliveryTime}</b>
                      </td>
                      <td>
                        <b>{courier.deliveryStatus}</b>
                      </td>
                      <td>
                        <b>{courier.price}</b>
                      </td>
                      <td>
                        <b>{courier.paymentStatus}</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="card form-card ms-2 me-2 mb-2 border-color custom-bg">
          <div className="card-header text-center bg-color custom-bg-text">
            <h4>Assign Delivery To Customer Couriers</h4>
          </div>
          <div className="card-body text-color">
            <form class="row g-3">
              <div class="col-auto">
                <label>
                  <b>Courier Id</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Enter Courier Id..."
                  name="courierId"
                  onChange={handleInput}
                  value={assignDelivery.courierId}
                />
              </div>

              <div className="col-auto">
                <label>
                  <b>Delivery Person</b>
                </label>
                <select
                  onChange={handleInput}
                  className="form-control"
                  name="deliveryId"
                >
                  <option value="">Select Delivery Person</option>

                  {deliveryPersons.map((person) => {
                    return (
                      <option value={person.id}> {person.firstName} </option>
                    );
                  })}
                </select>
              </div>

              <div class="col-auto">
                <button
                  type="submit"
                  class="btn bg-color custom-bg-text mt-4"
                  onClick={assignDeliveryToOrders}
                >
                  Assign Delivery Person
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignDeliveryToOrders;
