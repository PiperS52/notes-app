'use strict;'

function newNote() {
  let note = new Note();
  it("NoteList is an empty array on construction", function(){
    Bobexpects(note.NoteList.length).toEqual(0);
  })
};

function noteListCheck() {
  let note = new Note();
  it("getFullNoteList returns the full content of NoteList", function(){
    note.createNote("Helloooooo");
    note.createNote("k bye");
    Bobexpects(note.getFullNoteList().length).toEqual(2);
  })
};

function checkCreateNote() {
  let note = new Note();
  it("it checks the createNote function", function(){
    note.createNote("hello");
    Bobexpects(note.NoteList.length).toEqual(1);
  })

  let noteOne = new Note();
  let noteTwo = new Note();
  it("it checks that createNote adds a new entry to NoteList", function(){
    noteOne.createNote("hello");
    Bobexpects(noteOne.NoteList.length).toBeGreaterThan(noteTwo.NoteList.length);
  })
};

function checkAbbrevNoteList() {
  let note = new Note();
  it("it checks the Abbrev note array is working", function(){
    note.createNote("hello, I am a super long note, like way longer than 20c");
    Bobexpects(note.getAbbrevNoteList()[0].length).toEqual(20);
  })
};


newNote();
noteListCheck();
checkCreateNote();
checkCreateNote();
checkAbbrevNoteList();
