import * as React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  styled,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Divider,
  List,
  Toolbar,
  Badge,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Link,
  InputBase,
  Menu,
  MenuItem
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { mainListItems } from './listItems';
import qr from '../statics/images/buttons/f5.jpg';
import { lightGreen } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const order =[];
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const navigate = useNavigate(); // Import useNavigate here
  const isMenuOpen = Boolean(anchorEl);
  const [orders, setOrders] = useState([]);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('jwtToken');
  
    // Ensure token exists before making the request
    if (token) {
      axios.get('http://127.0.0.1:8000/order/', {
        headers: {
          Authorization: token // Include token in Authorization header
        }
      })
      .then(response => {
        setOrders(response.data); // Save fetched data
        // setFilteredorders(response.data); // Initially set filtered data to be all data
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
    } else {
      console.error('No token found');
    }
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); 
    navigate('/'); 
  };
  const handlePass = () => {
    // handleMenuClose();
    navigate('/changep');
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handlePass}>Change Password</MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }), // Hide button when drawer is open
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Bajarang Press
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* <Typography variant="h4" component="h1" gutterBottom>
        ALL ORDER REPORT
      </Typography> */}
      <Grid container spacing={3}>
              <Grid item xs={12}>
                
                <Box display="flex"         
          justifyContent="center" alignItems="center">
            
          <Box mt={2}component="section" height={50} width={420}display="flex"         
          justifyContent="center" alignItems="center" sx={{  p: 3, borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            }, }}>          
          <Typography mt={1}variant="body1"fontSize={20} color={'white'}>
          Order Report            
          </Typography>
          
          </Box>
          </Box>
          <Box mt={2}></Box>
          <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
            
          
      <Box component="form" sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Choose Product</InputLabel>
          <Select>
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Product 1</MenuItem>
            <MenuItem value={20}>Product 2</MenuItem>
            <MenuItem value={30}>Product 3</MenuItem>
          </Select>
        </FormControl>
        
        <TextField label="Order No" variant="outlined" />
        <Button variant="contained" color="primary">Search</Button>
      </Box>
      
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>ORDER NO.</TableCell>
              <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>PRINTING PRESS</TableCell>
              <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>DATE</TableCell>
              {/* <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>CUSTOMER</TableCell> */}
              <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>AMOUNT</TableCell>
              {/* <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>PRODUCT / CURRENT STATUS</TableCell> */}
              {/* <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>JOB NO</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
          {orders.map((order, index) => (
            <TableRow key={-index}>
                <TableCell>{order.order_id}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>{order.created}</TableCell>
                {/* <TableCell>{order.user}</TableCell> */}
                <TableCell>{order.total_amount}</TableCell>
                {/* <TableCell>{order.PRODUCT}</TableCell>
                <TableCell>{order.JOBNO}</TableCell> */}
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={1} sx={{ justifyContent: "center" }}>
                  <Button  variant="contained" disableElevation>
                    Expert to Excel
                  </Button>
                  </Box>
            </Paper>
            </Grid>
            </Grid>
    </Container>
        </Box>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </ThemeProvider>
  );
}
