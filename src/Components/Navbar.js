import React from 'react';
import './Navbar.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CreateIcon from '@mui/icons-material/Create';
import Dashboard from './Dashboard';

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <header className="header row align-items-center py-1">
        <div className="col-md-6 col-8">
          <p className='m-0'>Dashboard</p>
        </div>
        <div className='col-md-6 col-4  icons-material'>
          <CreateIcon />
          <QuestionMarkIcon />
        </div>
      </header>
      <br />
      <br />
      <br />
      <Dashboard />
    </div>
  );
}

export default Navbar;
