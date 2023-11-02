import axios from "axios";


const EMPLOYEE_API_BASE_URL = "http://localhost:9191/products";
const EMPLOYEE_POST_API_BASE_URL = "http://localhost:9191/addProduct";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(item){
        return axios.post(EMPLOYEE_POST_API_BASE_URL, item);
    }
}

export default new EmployeeService()