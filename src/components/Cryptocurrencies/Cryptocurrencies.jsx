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
	//const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);
	const [ coinList, setCoinList] = useState();
	const [ cryptos, setCryptos] = useState(coinList?.coinList);


	useEffect(() => {
		if(cryptoList != null){
			setCryptos(cryptoList?.data?.coins)	
		}
	},[cryptoList])

	useEffect(() => {
		const options = {
			method: 'GET',
			url: process.env.REACT_APP_COINMARKETCAP_API_CRYPTO_URL,
			headers: {
				'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKETCAP_API_KEY,
				'Accept':'application/json'
			}
		};
		axios.request(options).then(function (response) {
			if(response.data != null) {
				setCoinList({
					coinList: response.data.data
				})
			}
		}).catch(function (error) {
			console.error(error);
		});
	},[])

	//Returns de ID from CoinMarketCap API
	function searchIDFromCoin(symbol, name){
		if(coinList != null){
			for(var i = 0; i < Object.keys(coinList.coinList).length; i++){
				if(coinList.coinList[i].symbol == symbol && coinList.coinList[i].name == name) return coinList.coinList[i].id;
			}
		}
	}

	function getWeeklyChange(symbol, name){
		if(coinList != null){
			for(var i = 0; i < Object.keys(coinList.coinList).length; i++){
				if(coinList.coinList[i].symbol == symbol && coinList.coinList[i].name == name) return coinList.coinList[i].quote.USD.percent_change_7d;
			}
		}
	}

	console.log(coinList);
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
						<TableCell style={{fontWeight: 900}}>Last 7 days</TableCell>
          </TableRow>
        </TableHead>
			<TableBody>	
				{coinList?.coinList?.map((currency) =>
				 	<TableRow
				 	key={cryptos.name}
				 	sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			 		>
				 	<TableCell component="th" scope="row" style={{fontWeight: 900}}>
					 {currency.cmc_rank}
				 	</TableCell>
					<TableCell><Link key={currency.id} to={`crypto/${currency.id}`}><img className="crypto-image" src={currency.iconUrl} height='30px' /> {currency.name}</Link></TableCell>
					<TableCell style={{color: currency.quote.USD.percent_change_24h > 0? "green": "red", fontWeight: 600}}>${parseFloat(currency.quote.USD.price).toFixed(2)}</TableCell>
					<TableCell style={{color: currency.quote.USD.percent_change_24h > 0? "green": "red", fontWeight: 600}}>{parseFloat(currency.quote.USD.percent_change_24h).toFixed(2) + "%"}</TableCell>
					<TableCell style={{fontWeight: 600}}>${millify(currency.quote.USD.market_cap)}</TableCell>
					<TableCell style={{fontWeight: 600}}>${millify(currency.quote.USD.volume_24h)}</TableCell>
					<TableCell style={{fontWeight: 600}}>{currency.circulating_supply? millify(currency.circulating_supply): "-"}</TableCell>
					<TableCell style={{fontWeight: 600, width: '8%'}}><img src={process.env.REACT_APP_COINMARKETCAP_IMG_CHART_URL + currency.id + '.svg'} 
						class={/*getWeeklyData(searchIDFromCoin(currency.symbol))*/currency.quote.USD.percent_change_7d < 0 ? "crypto-chart-negative" : "crypto-chart-positive"}/></TableCell>
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
