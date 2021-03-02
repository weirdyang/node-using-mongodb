const bodyParser = require('body-parser');
const express = require('express');

const mongoose = require('mongoose');
// const { config, mongooseOptions } = require('./src/data/config');
const debug = require('debug')('app:index');

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose setup
// mongoose.connect(`${config.mongoUrl}/${config.databaseName}`, mongooseOptions);
mongoose.connect('mongodb://localhost/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// setup global promise
// not needed in v5
// https://stackoverflow.com/questions/51862570/mongoose-why-we-make-mongoose-promise-global-promise-when-setting-a-mongoo
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  debug(error);
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route set up;
require('./src/routes/routes')(app);

app.get('/', (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

module.exports = app;
