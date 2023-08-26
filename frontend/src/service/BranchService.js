import axios from 'axios';

//var cors = require('cors');


const header ={
    headers:{
       

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization:"Bearer " + sessionStorage["token"]
    },
}


const API_BASE_URL = "http://localhost:8080/admin";

class BranchService {

    getbranches(){
        return axios.get(API_BASE_URL+'/allbranch',header);
    }
}
export default new BranchService()