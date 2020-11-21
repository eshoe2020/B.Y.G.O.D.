const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URl || 'mongodb://localhost/bygods-users', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

db.on('connected', function() {
    console.log(`connected to MongoDB on ${db.host}:${db.port}`);
})