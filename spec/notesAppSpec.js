function newNote() {
  let description = "if NoteList is an empty array on construction"
  let note = new Note(); 
  expect(note.NoteList).toEqual(0);
};


function noteListCheck() {
  let description = "it returns the full note list"
  let note = new Note();
  note.createNote("Helloooooo")
  note.createNote("k bye")
  var x = note.getFullNoteList();
  expect(note.getFullNoteList().length).toEqual(2)
}

function checkCreateNote() {
  let description = "it checks the createNote function"
  let note = new Note();
  note.createNote("hello")
  expect(note.NoteList[0]).toChangeBy(1)
}

function checkAbbrevNoteList() {
  let description = "it checks the Abbrev note array is working"
  let note = new Note();
  note.createNote("hello, I am a super long note, like way longer than 20c")
  note.createNote("Whoah so am I, so weird, I'm also like a way long note")
  expect(note.getAbbrevNoteList()[0].length, 20, description)
}

try {
  newNote();
}
catch (error) {
  console.log("error")
}
try { 
  noteListCheck();
}
catch (error) {

}
try { 
  checkCreateNote();
}
catch (error) {

}
  checkAbbrevNoteList();