import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../api/cryptoApi';
import { Cryptocurrencies, News } from '..';
import Loader from '../Loader';

import './HomePage.scss';

const { Title } = Typography;

const HomePage = () => {
	const { data, isFetching } = useGetCryptosQuery(20);
	const globalStats = data?.data.stats;

	if(isFetching) return <Loader/>;

	return(
		<>
			<div className="home-heading-container">
				<Title level={2} className="heading">Global Crypto Stats</Title>
				<Row>
					<Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
					<Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
					<Col span={12}><Statistic title="Total Market Cap ($)" value={millify(globalStats.totalMarketCap)}/></Col>
					<Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
					<Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
				</Row>
			</div>
			<Cryptocurrencies simplified />
			<div className="home-heading-container">
				<Title level={3} className="show-more"><Link to="/cryptocurrencies" style={{color: '#6e5efe'}}>Show more</Link></Title>	
				<Title level={2} className="home-title">Latest news</Title>
				<News simplified />
				<Title level={3} className="show-more"><Link to="/news" style={{color: '#6e5efe'}}>Show more</Link></Title>	
			</div>
		</>
	)
}

export default HomePage;