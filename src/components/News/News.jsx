import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment';
import Loader from '../HomePage/Loader';
import styles from './News.module.css'

import { useGetCryptoNewsQuery } from '../../api/cryptoNewsApi';

const { Text, Title } = Typography;
const noImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', amount: simplified ? 6 : 15})


	if(!cryptoNews?.value) return <Loader/>
	return (   
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className={styles.news_card_simplified}>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className={styles.news_image_container_simplified}>
                <Title className={styles.news_title_simplified} level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || noImage} alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className={styles.news_container_simplified}>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || noImage} alt="" />
                  <Text className={styles.news_provider_simplified}>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
	)
}
export default News;

