// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    //delete many

    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    //     });

    // delete manny(ilya) from users - assignment
    // db.collection('Users').deleteMany({name:'ilya'}).then((result)=>{
    //     console.log(result);
    // });

    //delete one

    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // find one and delete

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    //find one(id = 100) and delete
    // db.collection('Users').findOneAndDelete({_id:100}).then((result)=>{
    //     console.log(result);
    // });

    //db.close();
})