const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jsugorf.mongodb.net/${process.env.ENV === 'dev' ? 'development' : 'production'}?retryWrites=true&w=majority&appName=Cluster0`, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');
    } catch (error) {
        console.error(error);
    }
}
module.exports = connectToDB