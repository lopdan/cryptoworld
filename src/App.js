import React from 'react'
import { Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';

import { NavigationBar, HomePage, Cryptocurrencies, NewsPage } from './components';
import './App.css';
import 'antd/dist/antd.css';


//9300C5
const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<NavigationBar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Switch>
							<Route exact path="/">
								<HomePage />
							</Route>
							<Route exact path="/exchanges">
							</Route>
							<Route exact path="/cryptocurrencies">
								<Cryptocurrencies />
							</Route>
							<Route exact path="/news">
								<NewsPage />
							</Route>
						</Switch>
					</div>
				</Layout>
			</div>
			<div className="footer">
					<Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 
						<Link to="/">
							 CryptoWorld Inc.
						</Link> <br />
						All Rights Reserved.
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
  		</div>
	)
}

export default App;