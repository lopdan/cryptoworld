import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment';
import Loader from '../Loader';
import styles from './News.module.css'

import { useGetCryptoNewsQuery } from '../../api/cryptoNewsApi';
import { useGetCryptosQuery } from '../../api/cryptoApi';
import { padding } from '@mui/system';

const { Text, Title } = Typography;
const { Option } = Select;
const noImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const NewsPage = () => {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
	const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', amount: 15})


	if(!cryptoNews?.value) return <Loader/>
  {
    return (   
      <div className={styles.news}>
        <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={36} sm={24} lg={12} key={i}>
            <Card hoverable className={styles.news_card}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className={styles.news_card_container}>
                  <div className={styles.news_image_container}>
                    <img src={news?.image?.thumbnail?.contentUrl || noImage} alt="" />
                  </div>
                  <div className={styles.news_container}>
                    <div className={styles.new_providre_data}>                     
                      <Text className={styles.news_provider} style={{marginLeft: 0}}>{news.provider[0]?.name}</Text>
                      <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                    </div>
                    <Title className={styles.news_title} level={4}>{news.name}</Title>
                    <p>{news.description.length > 100 ? `${news.description.substring(0, 200)}...` : news.description}</p>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    )
  }
}
export default NewsPage;

