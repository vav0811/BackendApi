var mongoose=require('mongoose');
var config=require('../config');

const mongoConfig=async()=>{

    const connection=await mongoose.connect(config.databaseurl,()=>console.log("connected to database"));
    return connection.connection.db;
};
module.exports=mongoConfig;