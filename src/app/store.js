import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../api/cryptoApi';

export default configureStore({
  reducer:{
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  }
});