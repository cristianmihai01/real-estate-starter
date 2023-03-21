import React from 'react';
//import routes and router from react-router-dom
import { Route, Routes } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';





const App = () => {
  return ( 
 <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
