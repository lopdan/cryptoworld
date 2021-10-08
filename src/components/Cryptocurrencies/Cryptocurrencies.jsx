import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { useGetCryptosQuery, useGetCryptoHistoryQuery } from '../../api/cryptoApi';
import axios from 'axios'

import Loader from '../HomePage/Loader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Cryptocurrencies.css';

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
	const amount = simplified ? 20 : 100;
	const { data: cryptoList, isFetching } = useGetCryptosQuery(amount);
	const [timeperiod, setTimeperiod] = useState('7d');
	const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);

	useEffect(() => {
		if(cryptoList != null){
			setCryptos(cryptoList?.data?.coins)	
		}
	},[cryptoList])

	const options = {
		method: 'GET',
		url: process.env.REACT_APP_COINMARKETCAP_API_CRYPTO_URL,
		headers: {
			'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKETCAP_API_KEY,
			'Accept':'application/json'
		}
	};
	
	axios.request(options).then(function (response) {
		console.log(response.data);
	}).catch(function (error) {
		console.error(error);
	});
	//fetchData();

	//Returns 7-day price change for price coloring
	function getWeeklyData(id){
		const coinId = id;
		var historyData = useGetCryptoHistoryQuery({coinId, timeperiod});
		if(historyData.data != null && historyData.isSuccess)
		{
			return historyData.data.data.change;
		}
	}

	if(isFetching) return <Loader/>
	return (
    <>
			<div className="crypto-table-container">
			<Title level={2}>Top Cryptocurrencies</Title>
			<TableContainer component={Paper} style={{backgroundColor: '#F6F6F6'}}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 900}}>Rank</TableCell>
            <TableCell style={{fontWeight: 900}}>Name</TableCell>
            <TableCell style={{fontWeight: 900}}>Price</TableCell>
            <TableCell style={{fontWeight: 900}}>24h %</TableCell>
            <TableCell style={{fontWeight: 900}}>Market Cap</TableCell>
						<TableCell style={{fontWeight: 900}}>Volume</TableCell>
						<TableCell style={{fontWeight: 900}}>Total Supply</TableCell>
						<TableCell>Last 7 days</TableCell>
          </TableRow>
        </TableHead>
			<TableBody>	
				{cryptos?.map((currency) =>
				 	<TableRow
				 	key={cryptos.name}
				 	sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			 		>
				 	<TableCell component="th" scope="row" style={{fontWeight: 900}}>
					 {currency.rank}
				 	</TableCell>
					<TableCell><Link key={currency.id} to={`crypto/${currency.id}`}><img className="crypto-image" src={currency.iconUrl} height='30px' /> {currency.name}</Link></TableCell>
					<TableCell style={{color: currency.change > 0? "green": "red", fontWeight: 600}}>${parseFloat(currency.price).toFixed(2)}</TableCell>
					<TableCell style={{color: currency.change > 0? "green": "red", fontWeight: 600}}>{currency.change + "%"}</TableCell>
					<TableCell style={{fontWeight: 600}}>${millify(currency.marketCap)}</TableCell>
					<TableCell style={{fontWeight: 600}}>${millify(currency.volume)}</TableCell>
					<TableCell style={{fontWeight: 600}}>{currency.totalSupply? millify(currency.totalSupply): "-"}</TableCell>
					<TableCell style={{fontWeight: 600, width: '10%'}}><img src={process.env.REACT_APP_COINMARKETCAP_IMG_CHART_URL + '10791.svg'} 
						class={getWeeklyData('2') < 0 ? "crypto-chart-negative" : "crypto-chart-positive"}/></TableCell>
					</TableRow>,
				)}
			</TableBody>
			</Table>
			</TableContainer>
			</div>
		</>
	)
}
export default Cryptocurrencies;
