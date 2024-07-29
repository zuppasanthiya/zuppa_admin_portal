import React from 'react';
import './Navbar.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CreateIcon from '@mui/icons-material/Create';
import Dashboard from './Dashboard/Dashboard';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()



  return (
    <div className='container-fluid'>
      <header className="header row align-items-center py-1">
        <div className="col-md-6 col-8">
          <p className='m-0 text-start'>Dashboard</p>
        </div>
        <div className='col-md-6 col-4  icons-material'>
          <Link to={"/progress"}>
        <CreateIcon/>
        </Link>
          <QuestionMarkIcon />
        </div>
      </header>
      <br />
      <br/>
      <br/>
   <Dashboard  data-bs-spy="scroll" data-bs-offset="0" tabindex="0" />
   
      <br />
      <br />

    </div>
  );
}

export default Navbar;