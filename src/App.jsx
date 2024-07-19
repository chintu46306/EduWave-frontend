import './App.css';

import {Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';
import HomePage from './Pages/HomePage.jsx';


function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>  
      </Routes>
    </>
  )
}

export default App
