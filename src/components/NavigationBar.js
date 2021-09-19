import React from 'react';
import { Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';


const NavigationBar = () => {
    return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src="./bitcoin-mind.png" size="large"/>
				<Typography.Title level={2} className="logo">
					<Link to="/">CryptoWorld</Link>
				</Typography.Title>
			</div>
		</div>
    )
}

export default NavigationBar;
