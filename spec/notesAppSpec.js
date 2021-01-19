function newNote() {
  let description = "if NoteList is an empty array on construction"
  let note = new Note(); 
  bob.toEqual(note.NoteList.length, 0, description);
};

// function circleRadiusCheck() {
//   let description = "if circle radius is 10 on construction"
//   let circle = new Circle();
//   bob.toEqual(circle.radius, 10, description);
// };

newNote();
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
