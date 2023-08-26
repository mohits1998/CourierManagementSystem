import axios from 'axios';

const header = {
    headers: {
         'Accept': 'application/json',
        withCredentials: false,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Content-type": "application/json",
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
    },
    
}


// {token:"Bearer " + sessionStorage["token"] }

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/admin";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + '/getemployees', header);
    }

    createEmployee() {
        return axios.post(`http://localhost:8080/admin/add_emp`, header);

    }
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/employee/' + employeeId, header);
    }

    updateEmployee(employeeDetail,employeeId) {
        return axios.put(`http://localhost:8080/admin/employee_updt/`+`${employeeId}`,employeeDetail);
    }

    deleteEmployee(id) {
        return axios.delete(`http://localhost:8080/admin/employee_del/${id}`, header);
    }
}

export default new EmployeeService()