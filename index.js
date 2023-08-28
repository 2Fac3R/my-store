const express = require('express');
const routerApi = require('./routes');

const {
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(port, () => {
  console.log('Server running -> localhost:' + port);
});
