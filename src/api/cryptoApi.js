import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '79cacc458amshe7bdebf39adc1afp1d6cb9jsn4c65a006911f'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (amount) => createRequest(`/coins?limit=${amount}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
    getCoinData: builder.query({ 
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  })
})

export const { useGetCryptosQuery, useGetCryptoHistoryQuery, useGetCoinDataQuery, useGetExchangesQuery } = cryptoApi;