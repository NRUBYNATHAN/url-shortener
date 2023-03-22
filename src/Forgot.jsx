

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';


export function Forgot() {

  
  const {handleSubmit,values,handleChange}=useFormik({
    initialValues:{
      
      email:"",
    },
    onSubmit:async (value)=>{
      console.log(value)
     const data= await fetch("http://localhost:4000/forgot",{
     method:"POST",
     headers: {"Content-type": "application/json",},
     body:JSON.stringify(value)
 })
const result=await data.json()
alert(result.status)
console.log(result)
},
})
    

   

  return (
    <form onSubmit={handleSubmit}>
    <div className='login'>
  
    <TextField name="email" value={values.email} onChange={handleChange} label="email place here" variant="outlined"/>
    <Button onClick={()=>alert("kindly check your given email")} variant='contained' color="success" type="submit">submit</Button>
      
    </div>

    </form>
  );
}
