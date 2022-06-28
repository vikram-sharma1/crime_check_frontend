import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {StoreContextporovider} from "./Context/Store"



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextporovider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StoreContextporovider>
  </BrowserRouter>
)
