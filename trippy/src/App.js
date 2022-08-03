import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  withRouter 
} from "react-router-dom";

import './App.css';
import Home from "./views/Home";
import Hotel from "./views/Hotel";
import HotelByCity from "./views/HotelByCity";
import Navbar from "./components/Navbar";

export class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App container-fluid ">
        <Navbar/>
        <Routes> 
              <Route exact path="/" element={<Home/>}/>                                    
              <Route  path="/hotels/:city" element={<Hotel/>}/>                                    
              <Route  path="/hotel" element={<Hotel/>}/>                                       
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
