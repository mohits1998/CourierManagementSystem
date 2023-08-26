import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

import Header from './Header';

const Navigation = (props) => {
  const dispatch = useDispatch()
  const userSignin = useSelector((store) => store.userSignin)

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-primary bg-light ">
        <div className="container-fluid">
          <img src="https://icons.getbootstrap.com/assets/icons/truck.svg" width="40" height="40" alt=""></img>
          <a className="navbar-brand mb-0 h1" href="/home">  COURIER MANAGMENT SYSTEM </a>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-info" id="navbarNavDropdown">
              <ul className="navbar-nav">
              <li className="nav-item">
               <a className="nav-link active" aria-current="screens" href="/about">Contact Us</a>
               </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">

                  <a className="nav-link active" aria-current="page" href="/Signin_admin">Admin</a>
                </li>
                <li className="nav-item">

                  <a className="nav-link active" aria-current="page" href="/Signin_employee">Employee</a>
                </li>
                <li className="nav-item">

                  <a className="nav-link active" aria-current="page" href="/Signin_customer">Customer</a>
                </li>
                {/* <li className="nav-item">
              <a className="nav-link" href="/about">About_us</a>
            </li> */}
                {/* <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li> */}
                {/* {userSignin.response == null &&  <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Login
          </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item"  href="/Signin_customer">Customer Login</a></li>
                <li><a className="dropdown-item"  href="/Signin_employee">Employee Login</a></li>
                <li><a className="dropdown-item"  href="/Signin_admin">Admin Login </a></li>
              </ul>
            </li>} */}
              </ul>
            </div>
          </div>
        </div>
        <div>
      <div className="d-flex">
            <button onClick={onLogout} className="btn btn-outline-success">
              Logout
           </button>
          </div>
        </div >
      </nav>
    </div >



  )
}

export default Navigation