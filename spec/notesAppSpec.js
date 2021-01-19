function newNote() {
  let description = "if NoteList is an empty array on construction"
  let note = new Note(); 
  bob.toEqual(note.NoteList.length, 0, description);
};


function noteListCheck() {
  let description = "it returns the full note list"
  let note = new Note();
  note.createNote("Helloooooo")
  note.createNote("k bye")
  var x = note.getFullNoteList();
  bob.toEqual(note.getFullNoteList().length, 2 , description )
}

function checkCreateNote() {
  let description = "it checks the createNote function"
  let note = new Note();
  note.createNote("hello")
  bob.toEqual(note.NoteList[0], "hello", description)
}

function checkAbbrevNoteList() {
  let description = "it checks the Abbrev note array is working"
  let note = new Note();
  note.createNote("hello, I am a super long note, like way longer than 20c")
  note.createNote("Whoah so am I, so weird, I'm also like a way long note")
  bob.toEqual(note.getAbbrevNoteList()[0].length, 20, description)
}


  newNote();
  noteListCheck();
  checkCreateNote();
  checkAbbrevNoteList();