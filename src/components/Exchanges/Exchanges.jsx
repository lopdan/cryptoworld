import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../../api/cryptoApi';
import Loader from '../HomePage/Loader';
import './Exchanges.css';

const { Text } = Typography;
const { Panel } = Collapse;


const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  console.log(exchangesList);
  if (isFetching) return <Loader />;

  return (
    <>
    <div className="exchange-table-container">
      <Row>
        <Row style={{ width: '100%'}}>
          <Col span={9} style={{fontWeight: 500, fontSize: '24px'}}>Exchanges</Col>
          <Col span={5} style={{fontWeight: 500, fontSize: '24px', marginLeft: '-2%'}}>24h Trade Volume</Col>
          <Col span={5} style={{fontWeight: 500, fontSize: '24px'}}>Markets</Col>
          <Col span={5} style={{fontWeight: 500, fontSize: '24px'}}>Change</Col>
        </Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id} style={{display: 'flex', justifyContent: 'space-between'}}> 
                    <Col span={9} style={{fontWeight: 700}}>
                      <Text><strong>{exchange.rank}.</strong>       </Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text ><strong>   {exchange.name}</strong></Text>
                    </Col>
                    <Col span={5} style={{fontWeight: 600}}>${millify(exchange.volume)}</Col>
                    <Col span={5} style={{fontWeight: 600}}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={5} style={{fontWeight: 600}}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
      </div>
    </>
  );
};

export default Exchanges;