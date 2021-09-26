import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../api/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', amount: simplified ? 10 : 100})

	console.log(cryptoNews);
	return (
			<div>
					
			</div>
	)
}
export default News;

