import React from 'react';
import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './routes';

const App = () => {
  return(
    <RouterProvider router={_ROUTER}/>
  )
};  

export default App;
