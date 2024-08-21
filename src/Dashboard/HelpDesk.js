// // import React from 'react';
// // import { AppBar, Toolbar, Typography, Box, IconButton, Badge, Container, Button } from '@mui/material';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// // import { useNavigate } from 'react-router-dom';

// // const theme = createTheme();

// // const HelpDesk = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <AppBar position="static" color="default" >
// //         <Box>
// //         <Toolbar sx={{ justifyContent: 'space-between'  ,backgroundColor: '#ffe0b2' }}>
// //             <Typography variant="h6" color="inherit" noWrap sx={{ color: 'red', fontWeight: 'bold' }}>
// //               Bajrang Press
// //             </Typography>
// //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //               <IconButton color="inherit">
// //                 <AccountCircle />
// //                 <Typography variant="body2" sx={{ marginLeft: 1 }}>
// //                   GSS TANWAR / ID: 1594
// //                 </Typography>
// //               </IconButton>
// //               <IconButton color="inherit">
// //                 <CurrencyRupeeIcon />
// //                 <Typography variant="body2" sx={{ marginLeft: 1 }}>
// //                   6.36
// //                 </Typography>
// //               </IconButton>
// //               <IconButton color="inherit">
// //                 <Badge badgeContent={0} color="error">
// //                   <NotificationsIcon />
// //                 </Badge>
// //               </IconButton>
// //             </Box>
// //           </Toolbar>
// //           <Toolbar>
// //                 <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
// //                 <Button color="inherit" onClick={() => navigate('/home')}>Home</Button>
// //                 <Button color="inherit" onClick={() => navigate('/addmoney')}>Add Money</Button>
// //                 <Button color="inherit">My Offer</Button>
// //                 <Button color="inherit">My Transaction</Button>
// //                 <Button color="inherit">Create Order</Button>
// //                 <Button color="inherit">Order Report</Button>
// //                 <Button color="inherit">All Invoice</Button>
// //                 <Button color="inherit">T&C</Button>
// //                 <Button color="inherit">Complain</Button>
// //                 <Button color="inherit" onClick={() => navigate('/helpdesk')}>Help Desk</Button>
// //                 </Box>
// //             </Toolbar>
// //         </Box>
// //       </AppBar>
// //       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// //         <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
// //           <Box>
// //             <Typography variant="h6" gutterBottom>
// //               FOR QUERY & COMPLAINT
// //             </Typography>
// //             <Typography variant="body1">
// //               📞 77-34-00-33-11 (10:00 AM TO 7:00 PM)
// //             </Typography>
// //           </Box>
// //           <Box>
// //             <Typography variant="h6" gutterBottom>
// //               ORDER BOOKING RELATED
// //             </Typography>
// //             <Typography variant="body1">
// //               📞 77-34-00-33-99, 9001594670, 9782002985
// //             </Typography>
// //           </Box>
// //           <Box>
// //             <Typography variant="h6" gutterBottom>
// //               FOR URGENT PRINT
// //             </Typography>
// //             <Typography variant="body1">
// //               📞 7014243956
// //             </Typography>
// //           </Box>
// //           <Box>
// //             <Typography variant="h6" gutterBottom>
// //               PACKING AND DISPATCH
// //             </Typography>
// //             <Typography variant="body1">
// //               📞 77-34-00-33-66
// //             </Typography>
// //           </Box>
// //           <Box>
// //             <Typography variant="h6" gutterBottom>
// //               MAIL YOUR FILE
// //             </Typography>
// //             <Typography variant="body1">
// //               Email: 📧 printerseye.online@gmail.com
// //             </Typography>
// //           </Box>
// //           <Box display="flex" justifyContent="center" mt={2}>
// //             {/* <img src="path-to-your-image" alt="Help Desk Illustration" /> */}
// //           </Box>
// //         </Box>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // };

// // export default HelpDesk;



// import * as React from 'react'; 
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles'; 
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// // import Grid from '@mui/material/Grid';
// // import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems } from './listItems';
// import img  from 'E:/react/superprint/my-login-app/src/statics/images/f5.jpg'

// // import Chart from './Chart';
// // import Deposits from './Deposits';
// // import Orders from './Orders';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(false); // Set initial state to closed
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };
// //   const navigate = useNavigate(); // React Router hook for navigation
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="absolute" open={open}>
//           <Toolbar
//             sx={{
//               pr: '24px', // keep right padding when drawer closed
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: '36px',
//                 ...(open && { display: 'none' }), // Hide button when drawer is open
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1 }}
//             >
//               Dashboard
//             </Typography>
//             <IconButton color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//               px: [1],
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List component="nav">
            
//             {mainListItems}
            
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//           }}
//         >
//           <Toolbar />                                                          
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//            <Box>
//          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
//              <Typography variant="h6" gutterBottom>
//                FOR QUERY & COMPLAINT
//              </Typography>
//              <Typography variant="body1">
//                📞 77-34-00-33-11 (10:00 AM TO 7:00 PM)
//              </Typography>
//            </Box>
//            <Box>
//              <Typography variant="h6" gutterBottom>
//                ORDER BOOKING RELATED
//              </Typography>
//              <Typography variant="body1">
//                📞 77-34-00-33-99, 9001594670, 9782002985
//              </Typography>
//            </Box>
//            <Box>
//              <Typography variant="h6" gutterBottom>
//                FOR URGENT PRINT
//              </Typography>
//              <Typography variant="body1">
//                📞 7014243956
//              </Typography>
//            </Box>
//            <Box>
//              <Typography variant="h6" gutterBottom>
//                PACKING AND DISPATCH
//              </Typography>
//              <Typography variant="body1">
//                📞 77-34-00-33-66
//              </Typography>
//            </Box>
//            <Box>
//              <Typography variant="h6" gutterBottom>
//                MAIL YOUR FILE
//              </Typography>
//              <Typography variant="body1">
//                Email: 📧 printerseye.online@gmail.com
//              </Typography>
//            </Box>
//            <Box display="flex" justifyContent="center" mt={2}>
//              <img src={img} alt="Help Desk Illustration" />
//            </Box>
//          </Box>
//          <Copyright sx={{ pt: 4 }} />
//        </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }


import * as React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { mainListItems } from './listItems';
import img  from 'E:/react/superprint/my-login-app/src/statics/images/f5.jpg'
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
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
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
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
          <Box mt={2}component="section" height={50} width={420}display="flex" alignItems="center"sx={{ p: 2, border: '1px dashed grey' }}>
          {/* FOR QUERY & COMPLAINT */}
          <Typography mt={1}variant="body1"fontSize={20}>
          FOR QUERY & COMPLAINT              
          </Typography>
          </Box>
          <Typography mt={1}variant="body1"fontSize={20}>
            📞 77-34-00-33-11              
          </Typography>
          <Typography variant="body1">
            (10:00 AM TO 7:00 PM)
          </Typography>
          <Box mt={2}component="section" height={50} width={420}display="flex" alignItems="center"sx={{ p: 2, border: '1px dashed grey' }}>
          {/* ORDER BOOKING RELATED */}
          <Typography mt={1}variant="body1"fontSize={20}>
          ORDER BOOKING RELATED          
          </Typography>
          </Box>
          <Typography mt={1}variant="body1"fontSize={20}>
          📞 77-34-00-33-99, 9001594670, 9782002985             
          </Typography>
          <Box mt={2}component="section" height={50} width={420}display="flex" alignItems="center"sx={{ p: 2, border: '1px dashed grey' }}>
          {/* FOR URGENT PRINT */}
          <Typography mt={1}variant="body1"fontSize={20}>
          FOR URGENT PRINT              
          </Typography>
          </Box>
          <Typography mt={1}variant="body1"fontSize={20}>
          📞 7014243956             
          </Typography>
          <Box mt={2}component="section" height={50} width={420}display="flex" alignItems="center"sx={{ p: 2, border: '1px dashed grey' }}>
          {/* PACKING AND DISPATCH */}
          <Typography mt={1}variant="body1"fontSize={20}>
          PACKING AND DISPATCH              
          </Typography>
          </Box>
          <Typography mt={1}variant="body1"fontSize={20}>
          📞 77-34-00-33-66              
          </Typography>
          <Box mt={2}component="section" height={50} width={420}display="flex" alignItems="center"sx={{ p: 2, border: '1px dashed grey' }}>
          {/* MAIL YOUR FILE */}
          <Typography mt={1}variant="body1"fontSize={20}>
          MAIL YOUR FILE              
          </Typography>
          </Box>
          <Typography mt={1}variant="body1"fontSize={20}>
          Email: 📧 printerseye.online@gmail.com           
          </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
              <img src={img} alt="Help Desk Illustration" />
            </Box>
          
          <Copyright sx={{ pt: 4 }} />
        </Container>
        </Box>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </ThemeProvider>
  );
}

