import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
//import 'react-slideshow-image/dist/styles.css';

const Adminboard = () => {
  return (

   <div>
    <h2>Admin Panel</h2>
    <div className="row">
  <div className="col-sm-6">
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">User Management Board</h5>
        <p className="card-text">Get all details here</p>
        <a href="/employee" className="btn btn-primary">Go to User Management Board</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title"> Courier Management Board</h5>
        <p className="card-text">_________________</p>
        <a href="/courierlist_admn" className="btn btn-primary">Go to Courier Management Board</a>
      </div>
    </div>
  </div>
</div>
<div>
    <div className="row">
  <div className="col-sm-6">
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Branch Management Board</h5>
        <p className="card-text">_________________</p>
        <a href="/branchlist" className="btn btn-primary">Go to Branch Management Board</a>
      </div>
    </div>
  </div>
  
</div>
<div>
  
</div>
</div>
</div>






);
}



export default Adminboard
