const fs = require("fs");
const path = require("path");
const { nanoid } = require('nanoid');

function createNewNote(body, notesArray) { 
  const note = body;
  note.id = nanoid(5);
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  createNewNote,
  validateNote
};