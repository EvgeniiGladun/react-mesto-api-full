const app = require('./app');
const {
  allowedCors,
} = require('./constants');

const { PORT = 3500 } = process.env;

app.use((req, res, next) => {
  const { method } = req;
  const { origin } = req.headers;
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);

    // if (method === 'OPTIONS') {
    //   res.header('Access-Control-Allow-Headers', requestHeaders);
    // }
    // return res.end();
  }

  return next();
});

app.listen(PORT, () => {
  console.log('Сервак работает');
});
