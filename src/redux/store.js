import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice'; // Import your slice

export default configureStore({
  reducer: {
    services: servicesReducer, // Add your slice to the store
  },
});
