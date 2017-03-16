const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Alex', age: 30};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Alex'}).then((result) => {
    console.log(result[0]);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58c19f643d47f7f4c5c9808a")
  }).then((result) => {
    console.log(result[0]);
  })



  //db.close();
});
