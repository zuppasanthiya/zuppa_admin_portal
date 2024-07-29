
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onprogress = () => {
const navigate = useNavigate()


const homePage=()=>{
    navigate("/")
}

  return (
    <div  className="d-flex flex-column align-items-center justify-content-center vh-100 pagenotfound" >
      <h3 className="mb-4">This Page Work In progress..</h3>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
  
      </div>
      <br/>
      <Button variant='contained' onClick={homePage}>Back</Button>
    </div>
  );
}

export default Onprogress;
