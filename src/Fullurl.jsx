import axios from "axios";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export function Fullurl() {
  const[loader,setLoader]=useState("false")
  const[input,setInput]=useState("")
  const[result,setResult]=useState("")
 
const fetchData=async ()=>{
  try{
    setLoader("true")
const res=await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
setLoader("false")

setResult(res.data.result.full_short_link)

  }catch(err){
alert(err)
  }
}
  const handleClick=()=>{
    fetchData();
    setInput("");
  }
  return (
    <div className="urlpage">
     
    <h1>Url Shortener</h1>
    <TextField  
     label="url placed here"
      variant="outlined"
    
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <Button variant="contained" color="primary" onClick={handleClick}>submit</Button>
   <div className="div">
    {loader==="true" ?<p>Loading...</p>:<a href={result}>{result}</a>}
    </div>
   <div>
   <TableContainer component={Paper}>
      <Table sx={{      Width: 1000 }} aria-label="customized table">
        <TableHead className='head'>
          <TableRow>
            {/* <StyledTableCell align='center'>Id</StyledTableCell> */}
            <StyledTableCell align="center">full url</StyledTableCell>
            <StyledTableCell align="center">short url</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody className='body'>
        
          
            {/* {input.map((income) => (
            <StyledTableRow key={income._id}>
              {/* <StyledTableCell component="th" scope="row">
                {income._id}
              // </StyledTableCell> */} 
              <StyledTableCell align="center">{input}</StyledTableCell>
              <StyledTableCell align="center"><a href={result}>{result}</a></StyledTableCell>
              
            {/* </StyledTableRow> */}
            
         {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
      
    
    </div>
  );
}
