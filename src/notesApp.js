'use strict;'

class Note {
  constructor{
    this.NoteList = []
  }

  getFullNoteList(){
    return this.NoteList;
  }

  getAbbrevNoteList(){
    var newarray = this.NoteList.map(myFunction);

    function myFunction(str) {
      return str.slice(0,10);
      }
      return newarray;
  }

  createNote(text){
    this.NoteList.push(text);
  }


}
