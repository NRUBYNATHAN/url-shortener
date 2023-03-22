import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';

export function Url() {
  const {handleChange,handleSubmit,values}=useFormik({
    initialValues:{
      url:""
    },
    onSubmit:(value)=>{
    console.log(value)
    addurl(value)
    }
  });
  const addurl=async (value)=>{
  await fetch("http://localhost:4000/url",{
    method:"POST",
    body:JSON.stringify(value),
    headers:{"Content-Type": "application/json",},
  
  })};
  return (
    <div>
      <h1>Url Shortener Page</h1>
      <div>
      <form className='form' onSubmit={handleSubmit}>
      <TextField name="url" value={values.url} onChange={handleChange} label="Url Place Here" variant="outlined" />
        <Button type="submit"  variant="contained" color="success">submit</Button>
      </form>
      </div>
     
    </div>
  );
}
