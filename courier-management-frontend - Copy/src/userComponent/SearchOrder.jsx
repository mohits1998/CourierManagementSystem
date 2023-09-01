import { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const SearchOrder = () => {
  const [allOrderData, setAllOrderData] = useState([]);
  const [orderId, setOrderId] = useState("");

  const deliveryStatus = ["Delivered", "On the Way", "Processing"];
  const deliveryTime = ["Morning", "Afternoon", "Evening", "Night"];

  const [orderDeliveryStatus, setOrderDeliveryStatus] = useState({
    courierId: "",
    deliveryStatus: "",
    deliveryTime: "",
    deliveryDate: "",
  });

  const handleOrderDelivery = (e) => {
    setOrderDeliveryStatus({
      ...orderDeliveryStatus,
      [e.target.name]: e.target.value,
    });
  };

  const getAllOrder = async () => {
    const allOrder = await retrieveAllOrder();
    if (allOrder) {
      setAllOrderData(allOrder);
    }
  };

  const retrieveAllOrder = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/courier/admin/showCourier?courierId=" +
        orderId
    );
    console.log(response.data);
    return response.data;
  };

  const searchOrderById = (e) => {
    getAllOrder();
    setOrderId("");
    e.preventDefault();
  };

  const updateDeliveryStatus = (e) => {
    console.log("CLICKED DELIVERY STATUS UPDATED");
    fetch(
      "http://localhost:8080/api/user/courier/admin/deliveryStatus/update",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDeliveryStatus),
      }
    ).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log("response", res);
        setAllOrderData({
          courierId: "",
          deliveryStatus: "",
          deliveryTime: "",
          deliveryDate: "",
        });

        setAllOrderData(res);
      });
    });

    e.preventDefault();
  };

  return (
    <div>
      <div
        className="card form-card mt-1 ms-2 me-2 mb-2 custom-bg"
        style={{
          height: "35rem",
        }}
      >
        <div className="card-header text-center bg-color custom-bg-text">
          <h4>Searh Customer Courier</h4>
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
                onChange={(e) => setOrderId(e.target.value)}
                value={orderId}
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
            <table className="table table-hover custom-bg-text text-center">
              <thead className="bg-color table-bordered border-color">
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
                {allOrderData.map((courier) => {
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
        <div className="card form-card ms-2 me-2 mb-2 custom-bg">
          <div className="card-header text-center bg-color custom-bg-text">
            <h4>Update Courier Delivery Status</h4>
          </div>
          <div className="card-body">
            <form class="row g-3">
              <div class="col-auto">
                <label className="text-color">
                  <b>Courier Id</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Enter Courier Id..."
                  name="courierId"
                  onChange={handleOrderDelivery}
                  value={handleOrderDelivery.courierId}
                />
              </div>
              <div class="col-auto">
                <label className="text-color">
                  <b>Select Delivery Date</b>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="inputPassword2"
                  name="deliveryDate"
                  placeholder="dd-mm-yyyy"
                  min="1997-01-01"
                  max="2030-12-31"
                  value={handleOrderDelivery.deliveryDate}
                  onChange={handleOrderDelivery}
                />
              </div>
              <div class="col-auto">
                <label className="text-color">
                  <b>Delivery Time</b>
                </label>

                <select
                  name="deliveryTime"
                  value={handleOrderDelivery.deliveryTime}
                  onChange={handleOrderDelivery}
                  className="form-control"
                >
                  <option value="">Select Delivery Time</option>

                  {deliveryTime.map((time) => {
                    return <option value={time}> {time} </option>;
                  })}
                </select>
              </div>
              <div class="col-auto">
                <label className="text-color">
                  <b>Delivery Status</b>
                </label>
                <select
                  name="deliveryStatus"
                  value={handleOrderDelivery.deliveryStatus}
                  onChange={handleOrderDelivery}
                  className="form-control"
                >
                  <option value="">Select Delivery Status</option>

                  {deliveryStatus.map((status) => {
                    return <option value={status}> {status} </option>;
                  })}
                </select>
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn bg-color custom-bg-text mt-4"
                  onClick={updateDeliveryStatus}
                >
                  Update Delivery Status
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOrder;
