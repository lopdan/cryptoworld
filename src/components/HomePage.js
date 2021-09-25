import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../api/cryptoApi';
import { Cryptocurrencies } from '../components';
import Loader from './Loader';

const { Title } = Typography;

const HomePage = () => {
	const { data, isFetching } = useGetCryptosQuery();
	const globalStats = data?.data.stats;

	if(isFetching) return <Loader/>;

	return(
		<>
			<div className="home-heading-container">
				<Title level={2} className="heading">Global Crypto Stats</Title>
				<Row>
					<Col span={12}><Statistic title="Total Cryptocurrencias" value={globalStats.total}/></Col>
					<Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
					<Col span={12}><Statistic title="Total Market Cap ($)" value={millify(globalStats.totalMarketCap)}/></Col>
					<Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
					<Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
				</Row>
			</div>
			<div className="home-heading-container">
				<Title level={2} className="home-title">Top Cryptocurrencies</Title>
				<Cryptocurrencies simplified />
				<Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>	
			</div>
			<div className="home-heading-container">
				<Title level={2} className="home-title">Latest news</Title>
				<Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>	
			</div>
			
		</>
	)
}

export default HomePage;