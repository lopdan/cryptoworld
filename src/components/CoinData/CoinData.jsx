import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';


import { useGetCoinDataQuery } from '../../api/cryptoApi';
import Loader from './../Loader';


const CoinData = () => {
  const { coinId } = useParams();
  const [ timeperiod, setTimeperiod ] = useState('7d');
  const { data, isFetching } = useGetCoinDataQuery(coinId);

	console.log(data)

  if (isFetching) return <Loader />;

  return (
    <div>

    </div>
  );
};

export default CoinData;