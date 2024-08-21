import * as React from 'react';
import {  Button,   TextField} from '@mui/material';
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
import { mainListItems } from './listItems';
import qr from 'E:/react/superprint/my-login-app/src/statics/images/f5.jpg'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

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
          <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms & Conditions
        </Typography>
        <Box >
          <Typography variant="body1" gutterBottom>
            ✸ <strong>क्या मैं अपना ऑर्डर कैंसिल कर सकता हूँ ?
            <br />
            ✸ एक बार प्रोसेस स्टार्ट होने के बाद आप आर्डर कैंसिल नहीं कर सकते !</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✸ <strong>ट्रांसपोर्ट में हुई किसी प्रकार की टूट फूट के लिए हमारी फर्म PRINTERS EYE PVT. LTD. किसी भी प्रकार से जिम्मेदार नहीं होगी !</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✸ <strong>
              पहले से अगर कोई प्रिंटिंग आपने करवा रखी है और आप वही कलर की प्रिंटिंग दोबारा करवाना चाहते है, तो ऐसा नहीं हो पायेगा ! ऐसा तभी हो सकता है जब आप पहले से हो रखी प्रिंटिंग का सैंपल ऑर्डर के साथ संस्थान टीम को उपलब्ध करवाएं ! अपनी प्रिंटिंग स्वयं के करवाएं या हमारे द्वारा हो करवाई हो ये नियम दोनों पर लागु है !
            </strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✸ <strong>प्रिंटिंग की मिस्टेक होने पर अगर आपके आर्डर की रि प्रिंटिंग हो तो उसके ट्रांसपोर्टेशन चार्ज आपके द्वारा ही वहन किये जायेंगे !</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✸ <strong>
              संस्थान के द्वारा जो भी आर्डर PRINTERS EYE PVT. LTD. द्वारा किये गए है उन सभी आईटम की क्वालिटी को भेजने वाली संस्थान स्वयं जांच परख के भेजे वर कंटेंट प्रतिबंधित नहीं होना चाहिए , नकली नहीं होना चाहिए, एवं वह किसी नियम का उल्लंघन नहीं करना चाहिए ! उल्लंघन एवं प्रतिबंधित आईटम भेजने पर यदि कोई भी शर्तों का उल्लंघन हुआ पाया जाता है तो PRINTERS EYE PVT. LTD. जो की एक B 2 B सेक्टर कम्पनी है किसी भी नियम के टूटने पर आर्डर निरस्त किया जायेगा एवं बंद कर दिया जाएगा !!
            </strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✸ <strong>
              उत्पाद के पैसे एवं किसी भी विवाद , एवं उत्पाद के स्तिथि में , "PRINTERS EYE PVT. LTD." की अधिकतम देनदारी केवल विवादित उत्पाद के दर तक ही होगी !
            </strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✸ <strong>सभी तरह के कानूनी मामले केवल जयपुर न्यायालय के अधीन है !</strong>
          </Typography>
        </Box>
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
