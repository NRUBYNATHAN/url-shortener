import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {API} from "./global";
export function Login() {
  const navigate=useNavigate();
  const[formstate,setFormstate]=useState("success")
  const {handleSubmit,values,handleChange}=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:async(value)=>{
      console.log(value)
      const data=await fetch(`${API}/login`,{
      method:"POST",
      body:JSON.stringify(value),
      headers:{"Content-Type": "application/json",},
    
    });
    if(data.status===400){
  console.log("error")
  setFormstate("error")
} else{   
  setFormstate("success")
  const result =await data.json();
    console.log(result)
    localStorage.setItem("token",result.token)
    navigate("/fullurl")
    }},
    });


   

  return (
    <form onSubmit={handleSubmit}>

    <div className='login'>
      
    {formstate==="success"?null:<h2 className='sig2'>Invalid Credentials</h2>}
      <h1>Login Here</h1>
    <TextField name="email" value={values.email} onChange={handleChange} label="email" variant="outlined"/>
    <TextField name="password" value={values.password} onChange={handleChange} label="password" variant="outlined"/>
      <Button variant='contained' color={formstate} type="submit">{formstate==="success"?"submit":"retry"}</Button>
      <Button color="secondary"onClick={()=>navigate("/forgot")}>forgot password ?</Button>
    </div>

    </form>
  );
}
