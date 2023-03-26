import React from 'react';
//import routes and router from react-router-dom
import { Route, Routes } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountPage from './pages/AccountPage';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;


const App = () => {
  return ( 
    <UserContextProvider>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn/' element={<Signin />} />
          <Route path='/SignUp/' element={<SignUp />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
          <Route path='/property/:id' element={<PropertyDetails  />} />
          
        </Routes>
        <Footer />

      </div>
  </UserContextProvider>
  );
};

export default App;
