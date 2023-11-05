import axios from "axios";


const EMPLOYEE_API_BASE_URL = "http://localhost:9191/products";
const EMPLOYEE_POST_API_BASE_URL = "http://localhost:9191/addProduct";
const EMPLOYEE_UPDATE_API_BASE_URL = "http://localhost:9191/productById"
const EMPLOYEE_UPDATE_ID_API_BASE_URL = "http://localhost:9191/updateById"
const EMPLOYEE_DELETE_ID_API_BASE_URL = "http://localhost:9191/delete"
 

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(item){
        return axios.post(EMPLOYEE_POST_API_BASE_URL, item);
    }

    getEmployeeById(itemId){
        return axios.get(EMPLOYEE_UPDATE_API_BASE_URL + '/' + itemId);
    }

    updateEmployee(item, itemId){
        return axios.put(EMPLOYEE_UPDATE_ID_API_BASE_URL + '/' + itemId, item);
    }

    deleteEmployee(itemId){
        return axios.delete(EMPLOYEE_DELETE_ID_API_BASE_URL + '/' + itemId);
    }
}

export default new EmployeeService()