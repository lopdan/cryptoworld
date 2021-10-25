<h1 align="center">
  <img src="public/bitcoin-mind.png" alt="Bear Stone Smart Home" width="200">
  <p>
    CryptoWorld
  </p>
</h1>

<h4 align="center">CryptoWorld is a website created with React to track the prices, stats and news related with cryptocurrencies</h4>

https://user-images.githubusercontent.com/62883984/136786929-050b40f7-a118-4dfd-b823-24b2c195d559.mp4

## Description

This application tracks the top cryptocurrencies, data and news using RapidAPI's [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1) and [Bing News Search APIs](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/), and [CoinMarketCap's API](https://coinmarketcap.com/api/). Thanks to these APIs we can consult the latest news about cryptos and check our favourites ones prices and evolution over the time.

## Installation

Clone down this repository `git clone https://github.com/lopdan/cryptoworld`. You will need `node` and `npm` installed globally on your machine.

To install run `npm install` in your terminal.

After that you need to get your own API keys from [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1), [Bing News Search APIs](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/) and [CoinMarketCap's API](https://coinmarketcap.com/api/). Then you have to replace the [dotenv](https://www.npmjs.com/package/dotenv) variables (process.env....), with your own.

The first one to change is [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1)'s key and host from [cryptoApi](https://github.com/lopdan/cryptoworld/blob/main/src/api/cryptoApi.js), in the lines 3 to 6. You have to swap the `x-rapidapi-key` value with the one you got from the API. Also you have to create a variable called baseUrl with the API url(shown below).
```javascript
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': YOUR OWN KEY
}
```
```javascript
const baseUrl = 'https://coinranking1.p.rapidapi.com';
```

The second one to change is [Bing News Search APIs](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/)'s key and url from [cryptoNewsApi](https://github.com/lopdan/cryptoworld/blob/main/src/api/cryptoNewsApi.js), in the lines 3 to 7. You have to swap the `x-rapidapi-key` value with the one you got from the API. Also you have to create a variable called baseUrl with the API url(shown below).
```javascript
const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': YOUR OWN KEY
}
```
```javascript
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
```

Finally you have to change [CoinMarketCap's API](https://coinmarketcap.com/api/) keys from [Cryptocurrencies](https://github.com/lopdan/cryptoworld/blob/main/src/components/Cryptocurrencies/Cryptocurrencies.jsx) in each `useEffect`.

```javascript
/*Line 37 */
url: 'https://cors.bridged.cc/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&limit=100'
headers: {
  'X-CMC_PRO_API_KEY': YOUR OWN KEY,
  'Accept':'application/json'
}
...
/*Line 56*/
url: 'https://cors.bridged.cc/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
headers: {
  'X-CMC_PRO_API_KEY': YOUR OWN KEY,
  'Accept':'application/json'
}
```

Then when everything is ready, to start the server `npm start`. To visit the app `localhost:3000`

## Project Images

<h4 align="center">Home Page Header</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/HomeHeader.png"/>

<h4 align="center">Home Page News Section</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/HomeBottom.png"/>

<h4 align="center">Cryptocurrencies</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/Cryptocurrencies.png"/>

<h4 align="center">Coin Details Chart</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/Chart.png"/>

<h4 align="center">Coin Details About</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/CoinData.png"/>

<h4 align="center">Exchanges</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/Exchanges.png"/>

<h4 align="center">News Page</h4>
<img src="https://github.com/lopdan/cryptoworld/blob/master/src/images/News.png"/>

## Language & Tools

### HTML
* [html-react-parser](https://www.npmjs.com/package/html-react-parser): Used to get the detailed information about each coin from the API
### Javascript
* [React](https://reactjs.org/): UI Development
* [React Redux](https://react-redux.js.org/): State manager and data reducer.
* [React-router-dom](https://www.npmjs.com/package/react-router-dom): Dynamic routing.
* [Jest](https://www.npmjs.com/package/jest): Javascript testing.
### CSS
* Language to style a Web page
### SCSS
* CSS with variables, nesting and more
### Docker
* Package applications into containers
