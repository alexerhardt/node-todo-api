const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '58d00b21f521bbfb6c4d0afa'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('58d00b21f521bbfb6c4d0afa').then((todo) => {
  console.log(todo);
});
