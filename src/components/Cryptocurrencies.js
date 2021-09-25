import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../api/cryptoApi';
import Loader from './Loader';


const Cryptocurrencies = ({ simplified }) => {
	const { data: cryptoList, isFetching } = useGetCryptosQuery();
	const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);

	console.log(cryptos);
	if(isFetching) return <Loader/>

	return (
    <>
			<Row gutters={[32,32]} className="crypto-container">
				{cryptos.map((currency) =>
					<Col xd={24} sm={12} lg={6} className="crypto-card">
						<Link to={`crypto/${currency.id}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={<img className="crypto-image" src={currency.iconUrl} />}
								hoverable
								>
									<p>Price: ${millify(currency.price)}</p>
									<p>Market Cap: ${millify(currency.marketCap)}</p>
									<p>Volume (24h): ${millify(currency.volume)}</p>
									<p>Change (24h): {millify(currency.change)}%</p>
							</Card>
						</Link>
					</Col>
				)}
			</Row>
		</>
		
	)
}
export default Cryptocurrencies;
