import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import LieuDv from './containers/Recommended-Visiteur/LieuDv';
import Register from './containers/AUth/Register';
import Login from './containers/AUth/Login';
import Forgetpasswd from './containers/Passwd/Forgetpasswd';
import RecVisiteur from './containers/Recommended-Visiteur/RecVisiteur';
const router = createBrowserRouter([
  {
  path:"/",
   element:<App/>,
} ,
{
  path:"/LieuDV",
   element:<LieuDv/>

},
{
  path:"/RecVisiteur",
   element:<RecVisiteur/>

},
{
  path:"/Register",
   element:<Register/>

},
{
   path:"/Login",
    element :<Login/>
},
{ 
  path:"/Forgetpasswd",
   element:<Forgetpasswd/>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
reportWebVitals();
