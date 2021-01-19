'use strict;'

class Note {
  constructor() {
    this.NoteList = []
  }

  getFullNoteList(){
    return this.NoteList;
  }

  getAbbrevNoteList(){
    var newarray = this.NoteList.map(abbreviate);

    function abbreviate(str) {
      return str.slice(0,21);
      }
      return newa;
  }

  createNote(text){
    this.NoteList.push(text);
  }


}
