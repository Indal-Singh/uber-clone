const mongoose = require('mongoose');

const connectDB = async () =>
{
    await mongoose.connect(process.env.DB_URi)
        .then(()=>console.log(`Connected With Database`))
        .catch(err=>console.log(err));
}

module.exports = connectDB;
