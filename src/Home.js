import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper, IconButton, Badge } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const Home = () => {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
        <AppBar position="static" color="default" >
            <Box>
            <Toolbar sx={{ justifyContent: 'space-between'  ,backgroundColor: '#ffe0b2' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ color: 'red', fontWeight: 'bold' }}>
                Bajrang Press
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color="inherit">
                    <AccountCircle />
                    <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    GSS TANWAR / ID: 1594
                    </Typography>
                </IconButton>
                <IconButton color="inherit">
                    <CurrencyRupeeIcon />
                    <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    6.36
                    </Typography>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={0} color="error">
                    <LocalMallIcon />
                    </Badge>
                </IconButton>
                </Box>
            </Toolbar>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
                <Button color="inherit" onClick={() => navigate('/home')}>Home</Button>
                <Button color="inherit" onClick={() => navigate('/addmoney')}>Add Money</Button>
                <Button color="inherit">My Offer</Button>
                <Button color="inherit">My Transaction</Button>
                <Button color="inherit">Create Order</Button>
                <Button color="inherit">Order Report</Button>
                <Button color="inherit">All Invoice</Button>
                <Button color="inherit">T&C</Button>
                <Button color="inherit">Complain</Button>
                <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>

                <Button color="inherit" onClick={() => navigate('/helpdesk')}>Help Desk</Button>
                </Box>
            </Toolbar>
            </Box>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            {/* <img src="/path/to/your/banner.jpg" alt="Banner" style={{ width: '100%' }} /> */}
            </Box>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
            Our Services
            </Typography>
            <Grid container spacing={4}>
            {['Clip On Board', 'Table Top Standee', 'Auto Rickshaw Branding', 'Canopy', 'Roll Up Standee', 'Promotional Table'].map((service) => (
                <Grid item key={service} xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                    {service}
                    </Typography>
                    <img src={`/path/to/${service.toLowerCase().replace(/ /g, '_')}.jpg`} alt={service} style={{ width: '100%', height: 'auto' }} />
                    <Typography variant="body2" color="textSecondary">
                    1-3 Working Days
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
        </ThemeProvider>
    );
    };

export default Home;
