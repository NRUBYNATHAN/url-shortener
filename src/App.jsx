

import './App.css'
import { Url } from './Url';
import {Routes, Route, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Signup } from './Signup';
import { Home } from './Home';
import { Login } from './Login';
import { ProductedRoute } from './ProductedRoute';
import { Forgot } from './Forgot';
import { Reset } from './Reset';
import { Fullurl } from './Fullurl';

export default function App() {
  const navigate=useNavigate()
   return (
    <div>
      <AppBar position="static">
        <Toolbar>

          <Button onClick={()=>navigate("/")} color="inherit">HOME</Button>
          {/* <Button onClick={()=>navigate("/url-short")} color="inherit">URL-SHORTENER</Button> */}
          <Button sx={{marginLeft:"auto"}}  onClick={()=>navigate("/signup")} color="inherit">SIGNUP</Button>
          <Button onClick={()=>navigate("/login")} color="inherit">LOGIN</Button>
          {/* <Button onClick={()=>navigate("/reset")} color="inherit">reset</Button> */}
         

        </Toolbar>
      </AppBar>
       <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/url-short" element={ <ProductedRoute><Url/></ProductedRoute>} />
          <Route path="/signup" element={ <Signup/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/forgot" element={ <Forgot/>} />
          <Route path="/reset" element={ <Reset/>} />
          <Route path="/fullurl" element={ <Fullurl/>} />
          
       
      </Routes>
      
     
     
    </div>
  )
}

