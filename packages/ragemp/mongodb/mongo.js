let mongoose = require('mongoose');

let conn = 'mongodb://localhost:27017/ragemp';

mongoose.connect(conn, {
	poolSize: 6,
    useNewUrlParser: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('error', (err) => {
    console.error("Database Connection Error: " + err);
});

mongoose.connection.on('connected', () => {
    console.info('\x1b[32m', 'Database MongoDb - connected!');
});

module.exports = mongoose;