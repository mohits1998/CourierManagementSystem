import axios from 'axios';


const header = {
    headers: {
        // 'Accept': 'application/json',
        withCredentials: false,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Content-type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("token")
    },
}
// {token:"Bearer " + sessionStorage["token"] }

const COURIER_API_BASE_URL = "http://localhost:8080/admin";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee";

class CourierService {

    getcourier(){
        return axios.get(`http://localhost:8080/admin/getcourier`,header);
    }


    bookCourier(){
       return axios.post('http://localhost:8080/employee/addcourier',header);

    }



    bookCourierCust(){
        return axios.post('http://localhost:8080/customer/addcourier',header);
 
     }
    getcourierById(courierId){
        return axios.get(`http://localhost:8080/admin/courier/`+courierId,header);
    }

    // updateCourier(courierId,courier){
    //     return axios.put(COURIER_API_BASE_URL + '/'+courierId,courier,+header);
    // }

    // deleteCourier(courierId){
    //     return axios.delete(COURIER_API_BASE_URL +'/delcourier'+courierId,header);
    // }
}

export default new CourierService()