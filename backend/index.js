require('./src/config/env-config');
require('./src/config/db-config');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//import routes
const adminRoutes = require('./src/api/routes/adminRoutes');
const userRoutes = require('./src/api/routes/userRoutes');

//import utils
const logger = require('./src/utils/logger');

const app = express();

app.use(cors());
app.use(express.json({ limit: '100mb' }));

//usages of endpoints
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/user', userRoutes);

const port = process.env.PORT || 5050;

app.listen(port, () => {
    logger.info(`Server is running at ${port}`);
    console.log(`Server is running at ${port}`);
});