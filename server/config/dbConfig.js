const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const Redis = require('ioredis');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Mongodb connected successfully');
}).catch((err) => {
  console.log('Error connecting to Mongodb', err.message);
});

// const redis = new Redis({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD
// });

// redis.on('connect', () => {
//   console.log('Redis connected successfully');
// });

// redis.on('error', (err) => {
//   console.log('Error connecting to Redis:', err.message);
// });


module.exports = {  mongoose };