// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // },(err,result)=>{
    //     if (err) {
    //         return console.log('Unable inster todo');
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })


    // db.collection('Users').insertOne({
    //     name: 'ilya',
    //     age: 29,
    //     location: 'israel'
    // },(err,result)=>{
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        
    // });

    db.close();
})