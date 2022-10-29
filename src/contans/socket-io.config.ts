const API_URL = 'wss://api-pub.bitfinex.com/ws/2';

const SOCKET = new WebSocket(API_URL);

const SUBSCRIBE_BOOKS = JSON.stringify({
    event: 'subscribe',
    channel: 'book',
    symbol: 'tBTCUSD',
});

export { SOCKET, API_URL, SUBSCRIBE_BOOKS };
