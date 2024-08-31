import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch services
export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await axios.get('https://gssprintinghub.in/ser/');
  return response.data;
});
// console.log(response.data)
const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default servicesSlice.reducer;
