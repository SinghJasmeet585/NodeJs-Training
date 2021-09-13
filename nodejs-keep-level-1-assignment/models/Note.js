const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
  _id: String,
  title: String,
  text: String,
  state: {
    type: String,
    default: 'not-started'
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
  modifiedOn: {
    type: Date,
    default: Date.now()
  },
  userId: String
}, {_id: false})

// NoteSchema.method('transform', function () {
//   var obj = this.toObject();

//   //Rename fields
//   obj.id = obj._id;
//   return obj;
// });

let Note = mongoose.model('Note', NoteSchema);

module.exports = Note;