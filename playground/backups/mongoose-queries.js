const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58c93030ad5cfe8a112fe78f';
// var id = '58ca9dfe84d65210dc84455f';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// console.log('Hi mom!');

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//

// User.find({
//   _id: id
// }).then((user) => {
//   console.log('User', user);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// User.findById('58caa0650fe0061305d1f03b').then((user) => {
//   if (!user) {
//     return console.log('User not found!');
//   }
//   console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
//   console.log(e);
// });

User.findById('58caa0650fe0061305d1f03b').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
