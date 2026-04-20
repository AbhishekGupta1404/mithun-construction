const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/_/backend/api/projects', require('./routes/projects'));
app.use('/_/backend/api/services', require('./routes/services'));
app.use('/_/backend/api/contact', require('./routes/contact'));
app.use('/_/backend/api/testimonials', require('./routes/testimonials'));

app.get('/', (req, res) => {
  res.json({ message: 'Construction Website API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
