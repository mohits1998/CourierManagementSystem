import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { addBranch } from "../actions/branchActions";
import store from "../store";

const AddBranchScreen = (props) => {
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");

  
  const dispatch = useDispatch();

  const addBranchStore = useSelector((store) => store.addBranch);
  const { loading, response, error } = addBranchStore;

  useEffect(() => {
    if (response && response.status == "success") {
      props.history.push("/listbranch");
    } else if (error) {
      alert("error");
    }
  }, [loading, response, error]);

  const onAdd = () => {
    dispatch(addBranch((name,contact,email,address,city,pincode,state,country)));
  };

  const onCancel = () => {
    props.history.push("/admin");
  };

  return (
    <div className="container">
      <div>
        <Header title="AddBranch"/>
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Branch Name</label>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form">Contact</label>
            <input
              onChange={(e) => {
                setcontact(e.target.value);
              }}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form">Email</label>
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              className="form-control"
              placeholder="test@test.com"
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">address</label>
            <input
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="addrsss"
            ></input>
          </div> */}


<div className="mb-3">
          <label className="form">Address</label>
          <textarea
            onChange={(e) => {
              setaddress(e.target.value)
            }}
            className="form-control"
            rows="3"></textarea>
        </div>



          <div className="mb-3">
            <label className="form">City</label>
            <input
              onChange={(e) => {
                setcity(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder=""
            ></input>
          </div>

          <div className="mb-3">
            <label className="form">Pincode</label>
            <input
              onChange={(e) => {
                setpincode(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder=""
            ></input>
          </div>


          <div className="mb-3">
            <label className="form">State</label>
            <input
              onChange={(e) => {
                setstate(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder=""
            ></input>
          </div>

          <div className="mb-3">
            <label className="form">Country</label>
            <input
              onChange={(e) => {
                setcountry(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder=""
            ></input>
          </div>



          <div className="mb-3">
            <button onClick={onAdd} className="btn btn-success">
            Add Branch
            </button>
            {/* <div className="float-end">
              want to cancel click here ! <Link to="/listbranch">Branch</Link>
            </div> */}
          </div>
        </div>

        {addBranch.loading && <div>waiting for result</div>}
      </div>
    </div>
  );
};
export default AddBranchScreen;
