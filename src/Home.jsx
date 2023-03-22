import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import StartIcon from '@mui/icons-material/Start';
export function Home() {
  const navigate=useNavigate()
  return (
    <div className='ho'>
     <h1 className='head'>Welcome To All </h1>
     <h3>
     An URL shortener is a website that reduces the length of your URL (Uniform Resource Locator).
      The idea is to minimize the web page address into something that's easier to remember and track.
     </h3>
     <h3>when you are start before  <Button  startIcon={<StartIcon />} onClick={()=>navigate("/signup")} variant="contained" color="secondary">SIGNUP</Button>here</h3>
    </div>
  );
}
