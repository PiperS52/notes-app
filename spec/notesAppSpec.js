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

// function circleRadiusCheck() {
//   let description = "if circle radius is 10 on construction"
//   let circle = new Circle();
//   bob.toEqual(circle.radius, 10, description);
// };

newNote();
noteListCheck();
checkCreateNote();
// circleRadiusCheck();


// function circleTruth() {
//   let description = "if property is true on construction"
//   let circle = new Circle();
//   bob.toEqual(circle.property, true, description);
// };

// function circleRadiusCheck() {
//   let description = "if circle radius is 10 on construction"
//   let circle = new Circle();
//   bob.toEqual(circle.radius, 10, description);
// };

// circleTruth();
// circleRadiusCheck();
