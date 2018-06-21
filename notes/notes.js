console.log('notes.js starting');


var addNote = (title, body) => {
console.log('Adding note', title, body);

};

var getAll = () => {
console.log('Getting all notes');

};

var getNote = (title) => {
console.log('reading note' , title);

};

var removeNote = (title) => {
console.log('removing' , title);

};

module.exports = {
addNote,
getAll,
getNote,
removeNote
};
