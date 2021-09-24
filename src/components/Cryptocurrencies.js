import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../api/cryptoApi';
import Loader from './Loader';


const Cryptocurrencies = ({ simplified }) => {
	const { data, cryptoList, isFetching } = useGetCryptosQuery();
	const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);

	return (
    <>
		</>

	)
}
export default Cryptocurrencies;
