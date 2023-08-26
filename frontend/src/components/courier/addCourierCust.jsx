import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { toast } from 'react-toastify'
// import Header from '../../Components/Header'

const CourierrAddScreenCust = (props) => {

    //const userSignin = useSelector(store => store.userSignIn)

    const url_AddCourier = "http://localhost:8080/customer/addcourier"

    const header = {
        headers: {
            // 'Accept': 'application/json',
            withCredentials: false,
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "Content-type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        },
    }

    // const [trackingId, settrackingId] = useState("")
    const [courierType, setcourierType] = useState("")
    const [senderName, setsenderName] = useState("")
    const [senderContact, setsenderContact] = useState("")
    const [senderAddress, setsenderAddress] = useState("")
    const [senderCity, setsenderCity] = useState("")
    const [senderState, setsenderState] = useState("")
    const [senderPin, setsenderPin] = useState("")
    const [senderCountry, setsenderCountry] = useState("")
    const [recipientName, setrecipientName] = useState("")
    const [recipientContact, setrecipientContact] = useState("")
    const [recipientAddress, setrecipientAddress] = useState("")
    const [recipientCity, setrecipientCity] = useState("")
    const [recipientState, setrecipientState] = useState("")
    const [recipientPin, setrecipientPin] = useState("")
    const [recipientCountry, setrecipientCountry] = useState("")
    const [courierWeight, setcourierWeight] = useState("") 
    const [courierMode, setcourierMode] = useState("")  
    // const [createAt, setcreateAt] = useState("") 
    // const [updateAt, setupdateAt] = useState("") 
    const [price, setprice] = useState("") 
    const [status, setstatus] = useState("") 
     



    const body = {
        // trackingId:'',
        courierType,   
        senderName ,
        senderContact,
        senderAddress,
        senderCity,
        senderState,
        senderPin,
        senderCountry,
        recipientName,
        recipientContact,
        recipientAddress,
        recipientCity,
        recipientState,
        recipientPin,
        recipientCountry,
        courierWeight,
        courierMode,
        // createAt,
        // updateAt,
        price,
        status,
        
  

    }
console.log(body);
    const onAddCourier = () => {
        axios.post(url_AddCourier, body, header)
            .then(response => {
                alert("Courier added successfully")
                props.history.push("/custboard")
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (

        <div class="row">
            <div class="col-5" >
                {/* <div className="col-md-3">
                <div className="col-md-20"> */}
                

                    <div className="mb-3">
                        <h5 class="form-label" >courierType</h5>
                        <h5 class="form-label"  style={{ color: 'red' }} >*(DOCUMENT,ELECTRONICS,METAL,WOODEN)</h5>
                        {/* <select name="courierType" onChange={e => {setcourierType(e.target.value)}}>
                        <option value="document">SELECT COURIER TYPE</option>
                            <option value="document">DOCUMENT</option>
                            <option value="ELECTRONICS">ELECTRONICS</option>
                            <option value="METAL">METAL</option>
                            <option value="WOODEN">WOODEN</option>
                        </select >  */}
                        {/* <select>
                            <option value="AIR">AIR</option>
                            <option value="ROAD">ROAD</option>
                            <option value="MAIL">MAIL</option>
                        </select> */}
                        <input name="courierType" onChange={e => {setcourierType(e.target.value)}} className="form-control"  placeholder="House number, apartment" />
                    </div>

                    <div className="mb-3">
                        <h5 class="form-label">senderName</h5>
                        <input onChange={e => {setsenderName(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>

                    {/* <div className="mb-3">
                        <h5 class="form-label">senderName</h5>
                        <input onChange={e => {setsenderName(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div> */}
                    <div className="mb-3">
                        <h5 class="form-label">senderContact</h5>
                        <input  onChange={e => {setsenderContact(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">senderAddress</h5>
                        <input onChange={e => {setsenderAddress(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">senderCity</h5>
                        <input onChange={e => {setsenderCity(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">senderState</h5>
                        <input onChange={e => {setsenderState(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">senderPin</h5>
                        <input onChange={e => {setsenderPin(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">senderCountry</h5>
                        <input onChange={e => {setsenderCountry(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>

            </div> 
                <div class="col-5">   
                <div className='mt-4'>
                    <div className="mb-3">
                        <h5 class="form-label">recipientName</h5>
                        <input onChange={e => {setrecipientName(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">recipientContact</h5>
                        <input onChange={e => {setrecipientContact(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">recipientAddress</h5>
                        <input onChange={e => {setrecipientAddress(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">recipientCity</h5>
                        <input onChange={e => {setrecipientCity(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">recipientState</h5>
                        <input onChange={e => {setrecipientState(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">recipientPin</h5>
                        <input onChange={e => {setrecipientPin(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">recipient Country</h5>
                        <input onChange={e => {setrecipientCountry(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">Courier Weight</h5>
                        <input onChange={e => {setcourierWeight(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">Mode</h5>
                        <h5 class="form-label"  style={{ color: 'red' }} >*(AIR,ROAD)</h5>
                        {/* <select>
                            <option value="AIR">AIR</option>
                            <option value="ROAD">ROAD</option>
                            <option value="MAIL">MAIL</option>
                        </select>  */}
                        {/* <select>
                            <option value="DOCUMENT">DOCUMENT</option>
                            <option value="ELECTRONICS">ELECTRONICS</option>
                        </select> */}
                        <input onChange={e => {setcourierMode(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    {/* <div className="mb-3">
                        <h5 class="form-label">Create Date</h5>
                        <input onChange={e => {setcreateAt(e.target.value)}} className="form-control" type="date" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">Update Date</h5>
                        <input onChange={e => {setupdateAt(e.target.value)}} className="form-control" type="date" placeholder="Locality / area / nearby landmark " />
                    </div> */}
                    <div className="mb-3">
                        <h5 class="form-label">Price</h5>
                        <input onChange={e => {setprice(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                    <div className="mb-3">
                        <h5 class="form-label">Status</h5>
                        <h5 class="form-label"  style={{ color: 'red' }} >*(BOOKED)</h5>
                        <input onChange={e => {setstatus(e.target.value)}} className="form-control" type="text" placeholder="Locality / area / nearby landmark " />
                    </div>
                   
                </div>    
                </div>
                   

                    <div className="margin-right-3">
                        <br/>
                        <button onClick={onAddCourier} className="btn btn-outline-primary"> Add Courier </button>
                        <button onClick={()=>{props.history.push('/employeeb')}} className="btn btn-outline-danger NextBtn"> Cancel </button>
                    </div>
                  
                  {/* </div>
                  <div className="col-md-3"></div>
                   </div> */}
                 
                 
        </div>
        
    )
}

export default CourierrAddScreenCust