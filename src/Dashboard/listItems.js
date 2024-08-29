import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ReceiptSharpIcon from '@mui/icons-material/ReceiptSharp';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link as RouterLink } from 'react-router-dom';

export const mainListItems = (
    
  <React.Fragment>
    <ListItemButton component={RouterLink} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/inv">
      <ListItemIcon>
        <CurrencyRupeeIcon />
      </ListItemIcon>
      <ListItemText primary="Inv" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/addmoney">
      <ListItemIcon>
        <LocalOfferIcon />
      </ListItemIcon>
      <ListItemText primary="MyOffers" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/transaction">
      <ListItemIcon>
        <ReceiptSharpIcon />
      </ListItemIcon>
      <ListItemText primary="MyTransactions" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/order">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Order Report" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/invoice">
      <ListItemIcon>
        <ReceiptLongIcon />
      </ListItemIcon>
      <ListItemText primary="All Invoice" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/term">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="T&C" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/complain">
      <ListItemIcon>
        <SupportAgentIcon />
      </ListItemIcon>
      <ListItemText primary="Complain" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/helpdesk">
      <ListItemIcon>
        <HelpCenterIcon />
      </ListItemIcon>
      
      <ListItemText primary="Help Desk" />
    </ListItemButton>
  </React.Fragment>
);

