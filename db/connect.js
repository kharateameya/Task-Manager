const mongoose = require ("mongoose");



const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}


module.exports = connectDB

// mongoose.connect('mongodb://kharateamey:Ameya2002@sample.com:port/NodeExpressTaskManager', { useNewUrlParser: true })