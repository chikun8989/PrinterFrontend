import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const InvoicePage = () => {
  const { invoiceNo } = useParams(); // Retrieve the invoice number from the URL
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    fetch(`http://127.0.0.1:8000/invoic/${invoiceNo}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInvoice(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [invoiceNo]);

  if (loading) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">Error fetching data: {error.message}</Typography>;
  }

  // Ensure the invoice object contains the necessary data
  const { invoice_no, created, client, gstin,product_name,quantity,price,total_amount,  } = invoice || {};

  

  return (
    <Container maxWidth="md">
      <Box my={4} p={3} border={1} borderColor="grey.300">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="right" gutterBottom>
              INVOICE
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Printer Hub</Typography>
            
            <Typography>Phone: (645) 158-4568</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  label="INVOICE #"
                  fullWidth
                  value={invoice_no || ""}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="DATE"
                  // type="date"
                  fullWidth
                  value={created || ""}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                BILL TO:
              </Typography>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                size="small"
                margin="normal"
                value={client || ""}
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="GSTIN"
                fullWidth
                variant="outlined"
                size="small"
                margin="normal"
                value={gstin || ""}
                InputProps={{ readOnly: true }}
              />
              {/* Additional fields can be added here if needed */}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>CGST 18 %</TableCell>
                <TableCell>SGST 18%</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow >
                  <TableCell>{product_name}</TableCell>
                  <TableCell>{quantity}</TableCell>
                  <TableCell>{price*0.09}</TableCell>
                  <TableCell>{price*0.09}</TableCell>
                  <TableCell align="right">{price}</TableCell>
                </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="space-between" mt={4}>
          <Typography variant="h6">Thank you for your business!</Typography>
          <Box textAlign="right">
            <Typography variant="h5">TOTAL: {total_amount}</Typography>
          </Box>
        </Box>

        <Box mt={4} textAlign="center">
          <Typography>If you have any questions about this invoice, please contact</Typography>
          <Typography>[189415489]</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default InvoicePage;
