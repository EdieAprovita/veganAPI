const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
colors.enabled = true;

const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());

//CORS
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	})
);

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running');
	});
}

//MIDDLEWARE

//ROUTES FOR API

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	);
});
