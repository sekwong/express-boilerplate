const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/DB'; // @todo use global var

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	let db = mongoose.connect('mongodb://localhost:27017/TEST'); //@todo move to env var
	mongoose.connection.on("connected", function (ref) {
		console.log("Connected to DB!");
		callback(db);
	});

	mongoose.connection.on("error", function (err) {
		console.error('Failed to connect to DB  on startup ', err);
	});

	mongoose.connection.on('disconnected', function () {
		console.log('Mongoose default connection to DB : disconnected');
	});
}