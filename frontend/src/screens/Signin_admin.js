import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { authenticate, Signin_admn } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Signin_admin = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const userAuthenticate = useSelector((store) => store.userAuthenticate)

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(Signin_admn(email, password))
  }



  useEffect(() => {
    if (response ) {
       props.history.push('/admin')
    } else if (response && response.status == 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div> 
    <div className="container mb-3 bg-light ml-10" width="200px" >
      <Header title="Sign-in" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            type="password"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
          {/* <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div> */}
        </div>
        
      </div>
      {loading && <div>waiting for response</div>}
    </div>
    </div>
  )
}

export default Signin_admin
