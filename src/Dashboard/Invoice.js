// import * as React from 'react';
// import { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Typography,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeleteIcon from '@mui/icons-material/Delete';

// const invoices = [
//   {
//     invoiceNo: '2023/24 - 7263',
//     gstNo: '08AIVPR6257M1Z4',
//     date: '13 Jan 2024',
//     cgst: 443.565,
//     sgst: 443.565,
//     igst: 0,
//     totalTax: 887.13,
//     grandTotal: 5815.6,
//     status: 'Active',
//   },
//   {
//     invoiceNo: '2023/24 - 7204',
//     gstNo: '08AIVPR6257M1Z4',
//     date: '12 Jan 2024',
//     cgst: 57.6,
//     sgst: 57.6,
//     igst: 0,
//     totalTax: 115.2,
//     grandTotal: 755.2,
//     status: 'Active',
//   },
//   {
//     invoiceNo: '2023/24 - 6899',
//     gstNo: '08AIVPR6257M1Z4',
//     date: '29 Dec 2023',
//     cgst: 73.355,
//     sgst: 73.355,
//     igst: 0,
//     totalTax: 146.71,
//     grandTotal: 961.73,
//     status: 'Active',
//   },
// ];

// export default function InvoiceReport() {
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   return (
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom>
//         All Invoice Report
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DatePicker
//             label="From Date"
//             value={fromDate}
//             onChange={(newValue) => setFromDate(newValue)}
//             renderInput={(params) => <TextField {...params} />}
//           />
//           <DatePicker
//             label="To Date"
//             value={toDate}
//             onChange={(newValue) => setToDate(newValue)}
//             renderInput={(params) => <TextField {...params} />}
//           />
//         </LocalizationProvider>
//         <Button variant="contained" color="primary">
//           Search
//         </Button>
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Invoice No</TableCell>
//               <TableCell>GST No</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>CGST</TableCell>
//               <TableCell>SGST</TableCell>
//               <TableCell>IGST</TableCell>
//               <TableCell>Total Tax</TableCell>
//               <TableCell>Grand Total</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {invoices.map((invoice) => (
//               <TableRow key={invoice.invoiceNo}>
//                 <TableCell>{invoice.invoiceNo}</TableCell>
//                 <TableCell>{invoice.gstNo}</TableCell>
//                 <TableCell>{invoice.date}</TableCell>
//                 <TableCell>{invoice.cgst}</TableCell>
//                 <TableCell>{invoice.sgst}</TableCell>
//                 <TableCell>{invoice.igst}</TableCell>
//                 <TableCell>{invoice.totalTax}</TableCell>
//                 <TableCell>{invoice.grandTotal}</TableCell>
//                 <TableCell>{invoice.status}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary">
//                     <VisibilityIcon />
//                   </IconButton>
//                   <IconButton color="secondary">
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//         <Button variant="contained" color="primary">
//           Export to Excel
//         </Button>
//       </Box>
//     </Container>
//   );
// }



import * as React from 'react';
import { useState } from 'react';
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
import qr from 'E:/react/superprint/my-login-app/src/statics/images/f5.jpg'
import { lightGreen } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const invoices = [
  {
    invoiceNo: '2023/24 - 7263',
    gstNo: '08AIVPR6257M1Z4',
    date: '13 Jan 2024',
    cgst: 443.565,
    sgst: 443.565,
    igst: 0,
    totalTax: 887.13,
    grandTotal: 5815.6,
    status: 'Active',
  },
  {
    invoiceNo: '2023/24 - 7204',
    gstNo: '08AIVPR6257M1Z4',
    date: '12 Jan 2024',
    cgst: 57.6,
    sgst: 57.6,
    igst: 0,
    totalTax: 115.2,
    grandTotal: 755.2,
    status: 'Active',
  },
  {
    invoiceNo: '2023/24 - 6899',
    gstNo: '08AIVPR6257M1Z4',
    date: '29 Dec 2023',
    cgst: 73.355,
    sgst: 73.355,
    igst: 0,
    totalTax: 146.71,
    grandTotal: 961.73,
    status: 'Active',
  },
];

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

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const navigate = useNavigate(); // Import useNavigate here
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    // handleMenuClose();
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                
                <Box display="flex" justifyContent="center" alignItems="center">            
                    <Box mt={2}component="section" height={50} width={420}display="flex"         
                        justifyContent="center" alignItems="center" sx={{  p: 3, borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                        bgcolor: 'primary.dark',
                            }, }}>          
                        <Typography mt={1}variant="body1"fontSize={20} color={'white'}>
                            Invoice Report            
                            </Typography>
          
                    </Box>
                </Box>
          <Box mt={2}>

                <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                  <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={3}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="From Date"
                          value={fromDate}
                          onChange={(newValue) => setFromDate(newValue)}
                          renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="To Date"
                          value={toDate}
                          onChange={(newValue) => setToDate(newValue)}
                          renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Button variant="contained" color="primary" fullWidth>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow >
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>Invoice No</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>GST No</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>Date</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>CGST</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>SGST</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>IGST</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>Total Tax</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>Grand Total</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>Status</TableCell>
                          <TableCell sx={{ backgroundColor: 'lightblue', color: 'black' }}>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {invoices.map((invoice) => (
                          <TableRow key={invoice.invoiceNo}>
                            <TableCell>{invoice.invoiceNo}</TableCell>
                            <TableCell>{invoice.gstNo}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.cgst.toFixed(2)}</TableCell>
                            <TableCell>{invoice.sgst.toFixed(2)}</TableCell>
                            <TableCell>{invoice.igst.toFixed(2)}</TableCell>
                            <TableCell>{invoice.totalTax.toFixed(2)}</TableCell>
                            <TableCell>{invoice.grandTotal.toFixed(2)}</TableCell>
                            <TableCell>{invoice.status}</TableCell>
                            <TableCell>
                              <IconButton color="primary" aria-label="view invoice">
                                <VisibilityIcon />
                              </IconButton>
                              <IconButton color="secondary" aria-label="delete invoice">
                                <PictureAsPdfIcon />
                              </IconButton>
                            </TableCell>
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
          </Box>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </ThemeProvider>
  );
}
