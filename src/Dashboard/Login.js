import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography, CssBaseline, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const [contact, setcontact] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make POST request to Django backend API
      const response = await axios.post('http://localhost:8000/login/', {
        contact: contact,
        password: password,
      });

      // On successful login, store JWT token and navigate to dashboard
      if (response.status === 200) {
        localStorage.setItem('contact', contact);
        const { token } = response.data;
        const { user } = response.data;
        const { name } = response.data;
        const { client } = response.data;
      
      // Store JWT token in localStorage
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('id', user);
        localStorage.setItem('name', name);
        localStorage.setItem('client', client);
        console.log(response.data)
        
        navigate('/dashboard');
      }
    } catch (error) {
      // Handle login failure (e.g., invalid credentials)
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Login failed. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#d1c4e9', // Light purple background
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            LOGIN
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact Number"
              name="contact"
              autoComplete="contact"
              autoFocus
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
              <Typography color="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#ffeb3b', color: 'black' }}
            >
              Login
            </Button>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
              Note: Please call if you are facing any login-related problem/issue.
              <br />
              Call: 9571457798
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href="#" variant="body2" sx={{ mb: 2 }}>
            <Button variant="outlined">FORGOT PASSWORD</Button>
          </Link>
          <Link href="#" variant="body2">
            <Button variant="outlined">DON'T HAVE AN ACCOUNT?</Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
