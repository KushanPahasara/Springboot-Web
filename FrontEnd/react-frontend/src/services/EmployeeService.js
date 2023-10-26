import axios from "axios";


const EMPLOYEE_API_BASE_URL = "http://localhost:9191/products";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService()