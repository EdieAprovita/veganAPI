const mongoose = require('mongoose');

/**
 * @description  Connect to MongoDB database
 */

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connections[0].name}`.cyan.underline.bold);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.underline);
		process.exit(1);
	}
};

module.exports = connectDB;
