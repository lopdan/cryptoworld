import React from 'react'
import { Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';

import { HomePage, Cryptocurrencies, NewsPage, NavBar, CoinData } from './components';
import './App.css';
import 'antd/dist/antd.css';

const App = () => {
	return (
		<div className="app">
			<div>
				<NavBar/>
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
								<Cryptocurrencies simplified={false}/>
							</Route>
							<Route exact path="/crypto/:coinId">
								<CoinData/>
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