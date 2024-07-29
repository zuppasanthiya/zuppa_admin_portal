

import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import drone from "../../Assets/drone.png";
import './SidebarMap.css';
import { useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




const SidebarMap = ({ onDroneClick }) => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const navigate = useNavigate();
  const homePage = () => {
    navigate("/");
  };
  const DrawerList = (
    <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer(false)} className='drawerbutton'>
      <List >
        {['Total Drones : 50', 'Currently Flying : 30', 'Currently Inactive : 20'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="sidebar-map d-flex flex-column align-items-center  text-warning">
      <div className="sidebar-item my-3">
        <BarChartIcon fontSize="large" color='warning' />
      </div>
      <div className="sidebar-item my-3" onClick={onDroneClick}>
        <img className="sidebar-itemImage" src={drone} alt="Drone" />
      </div>
   
     
      <div className="sidebar-item  mb-3">
        <ReplyIcon
          variant="contained"
          color="warning"
          fontSize="large"
          onClick={homePage}
        />
     </div>
     <Button onClick={toggleDrawer(true)} color='warning'>Drone Status</Button>
     <Drawer  open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SidebarMap;
