import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const AllOrders = () => {
  const [allCouriers, setAllCouriers] = useState([]);

  useEffect(() => {
    const getAllCourier = async () => {
      const allCourier = await retrieveAllCourier();
      if (allCourier) {
        setAllCouriers(allCourier);
      }
    };

    getAllCourier();
  }, []);

  const retrieveAllCourier = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/courier/admin/allCouriers"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>All Customers Couriers</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
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
                {allCouriers.map((courier) => {
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
    </div>
  );
};

export default AllOrders;
