import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateItemComponent from './components/CreateItemComponent';
import UpdateItemComponent from './components/UpdateItemComponent';


function App() {
  return (
    <Router>
    
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add" element={<CreateItemComponent />} />
          <Route path="/update/:id" element={<UpdateItemComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    
  </Router>
  );
}


export default App;
