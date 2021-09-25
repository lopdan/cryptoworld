import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../api/cryptoApi';
import Loader from './Loader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Cryptocurrencies = ({ simplified }) => {
	const { data: cryptoList, isFetching } = useGetCryptosQuery();
	const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);

	console.log(cryptos);
	if(isFetching) return <Loader/>

	return (
    <>
			<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>24h %</TableCell>
            <TableCell>Market Cap</TableCell>
						<TableCell>Volume</TableCell>
						<TableCell>Total Supply</TableCell>
          </TableRow>
        </TableHead>
			<TableBody>	
				{cryptos.map((currency) =>
				 	<TableRow
				 	key={cryptos.name}
				 	sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			 		>
				 	<TableCell component="th" scope="row">
					 {currency.rank}
				 	</TableCell>
					<TableCell><Link to={`crypto/${currency.id}`}><img className="crypto-image" src={currency.iconUrl} height='30px' /> {currency.name}</Link></TableCell>
					<TableCell>${millify(currency.price)}</TableCell>
					<TableCell style={{color: currency.change > 0? "green": "red"}}>{currency.change}</TableCell>
					<TableCell>${millify(currency.marketCap)}</TableCell>
					<TableCell>${millify(currency.volume)}</TableCell>
					<TableCell>{currency.totalSupply? millify(currency.totalSupply): "-"}</TableCell>
					</TableRow>
				)}
			</TableBody>
			</Table>
			</TableContainer>
		</>
		
	)
}
export default Cryptocurrencies;
