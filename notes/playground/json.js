//obj to JSON string
// var obj = {
// name: 'Nick'
// };
//
// var stringObj =JSON.stringify(obj);

// json string to obj
// var personString ='{"name": "Nick","age":27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'

};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);