import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/earthMarsDB', {
  
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
