const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//const mongoURI = 'mongodb+srv://FoodDel:captainamerica7@cluster0.h8kd6lj.mongodb.net/FoodDel?retryWrites=true&w=majority'
 const mongoURI = 'mongodb://FoodDel:captainamerica7@ac-7bw7xp3-shard-00-00.h8kd6lj.mongodb.net:27017,ac-7bw7xp3-shard-00-01.h8kd6lj.mongodb.net:27017,ac-7bw7xp3-shard-00-02.h8kd6lj.mongodb.net:27017/FoodDel?ssl=true&replicaSet=atlas-gj3s2g-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async() => {
   await mongoose.connect(mongoURI, { useNewUrlParser: true },async(err,result)=> {
        
        if(err) console.log("---" ,err);
        else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err, data){
           const food_category = await mongoose.connection.db.collection("food_category");
           food_category.find({}).toArray(function (err,catData){

            if(err) console.log(err);
            else {

                global.food_items = data;
                global.food_category = catData;
            }
           })
          
            
        })
        }
    
});
}

module.exports =  mongoDB;


