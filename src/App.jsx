import './App.css';

import {Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import NotFound from './Pages/NotFound.jsx';


function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>  
         <Route path="/about" element={<AboutUs />}></Route> 
         <Route path="*" element={<NotFound />}></Route> 


      </Routes>
    </>
  )
}

export default App
