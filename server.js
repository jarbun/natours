const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));