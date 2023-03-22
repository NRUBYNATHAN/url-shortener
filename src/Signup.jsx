import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {API} from "./global";
export function Signup() {
  const navigate=useNavigate();
  const[formstate,setFormstate]=useState("success")
  const formValidationSchema=yup.object({

    firstname:yup.string().required(),
    lastname:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.number().required(),
  }

  )
  const {handleChange,values,handleSubmit,handleBlur,touched,errors}=useFormik({
initialValues:{
  firstname:"",
  lastname:"",
  email:"",
  password:""
},
validationSchema:formValidationSchema,
onSubmit:(value)=>{
  console.log(value)
  signupuser(value);
}

  })
  const signupuser=async (value)=>{
   const data= await fetch(`${API}/signup`,{
    method:"POST",
    body:JSON.stringify(value),
    headers:{"Content-Type": "application/json",},
  
  })
  if(data.status===400){
    console.log("error")
    setFormstate("error")}
    else{
      setFormstate("success")
      navigate("/login")
    }
  }
  
  return (
    <div >
      
      <form onSubmit={handleSubmit}>
       
      <div className='signup'>
        <div className='sig'>
      {formstate==="success" ?null:<p className='sig1'>user already exists</p>}</div>
      <h1>Signup Here</h1>
        <TextField onBlur={handleBlur} error={touched.firstname && errors.firstname} helperText={touched.firstname && errors.firstname ?errors.firstname :null} name="firstname" value={values.firstname} onChange={handleChange} label="firstname" variant="outlined"/>
        <TextField onBlur={handleBlur} error={touched.lastname && errors.lastname} helperText={touched.lastname && errors.lastname ?errors.lastname :null}  name="lastname" value={values.lastname} onChange={handleChange} label="lastname" variant="outlined"/>
        <TextField onBlur={handleBlur} error={touched.email && errors.email} helperText={touched.email && errors.email ?errors.email :null}  name="email" value={values.email} onChange={handleChange} label="email" variant="outlined"/>
        <TextField onBlur={handleBlur} error={touched.password && errors.password} helperText={touched.password && errors.password ?errors.password :null}  name="password" value={values.password} onChange={handleChange} label="password" variant="outlined"/>
        <Button variant='contained' color={formstate} type="submit">{formstate==="success"?"submit":"retry"}</Button>
       
      </div>
      </form>
    
    </div>
  );
}
