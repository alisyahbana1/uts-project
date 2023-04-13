import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Addproducts from './Addproducts';
import Updateproducts from './Updateproducts'
import ProductList from './ProductList';



function App() {
  return (
    <div className="App">  
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/Add' element={<Addproducts/>}/>
        <Route exact path='/Update' element={<Updateproducts/>}/>
        <Route exact path='/List' element={<ProductList/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
