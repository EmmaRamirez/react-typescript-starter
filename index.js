// var massive = require("massive");
// var connectionString = "postgres://emma:@localhost/plans";
//
// var db = massive.connectSync({connectionString : connectionString});
//
// db.notes.find({id: 1}, function(err,res){
//   console.log(res);
// });
//

//const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://localhost:5432/plans');
const express = require('express');
const pgp = require('pg-promise');
const db = pgp('postgress://localhost:5432/plans');
const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.set('title', 'Planwiser');

db.one('SELECT $1 AS VALUE', 1)
    .then(function (data) {
      console.log(data.value);
    })
    .catch(function (error) {
      console.log(error);
    });

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been authenticated');
//   })
//   .catch(function(err) {
//     console.log('Unable to connect:', err);
//   });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// let Note = sequelize.define('note', {
//   title: Sequelize.STRING,
//   text: { type: Sequelize.STRING, allowNull: false }
// });
//
// // Note.sync({force: true}).then(() => {
// //   return Note.create({
// //     title: 'A Note Of Things',
// //     text: 'Lorem Ipsum sid oldor oboto mubungo.'
// //   }).then(function (note) {
// //     console.log('the thing that happened');
// //   })
// // });
//
// app.post('/note', function(req, res) {
//   console.log(req.originalUrl);
//   Note.sync({force: true}).then(() => {
//     return Note.create({
//       title: 'A Note',
//       text: 'Lorem Ipsum sid oldor oboto mubungo.'
//     });
//   });
// });

app.use(function(req, res, next) {
  res.status(404).send('Sorry can\'t find that!');
})

// sequelize.sync().then(() => {
//   return Note.create({
//     title: 'A Note',
//     text: 'Wow! I love Postgress!'
//   });
// }).then(function(note) {
//   console.log(note.get({
//     plain: true
//   }));
// });

app.listen(3000, () => {
  console.log('listening on port 3000');
});
