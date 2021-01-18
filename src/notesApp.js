
class Note {
  constructor{
    this.NoteList = []
  }

  getFullNoteList(){
    return this.NoteList;
  }

  getAbbrevNoteList(){
    this.NoteList.forEach(getChars);
    function getChars(elem, i, arr) {

    }
    return this.NoteList.slice
  }

  createNote(text){
    this.NoteList.push(text);
  }


}
//
var array = ["hi there how are you", "yes thats great, good job", "what are you doing tonight", "Whoop whoop it's almost time for a cuppa"]
array.forEach(myFunction)

// function myFunction(item, index, arr) {
//   var newArray = [];
//   arr[index] = item * 10;
// }
function firstTwenty(array) {
    var arr2 = []
    array.forEach(function(element) {
      arr2.push(element.slice(0,20))
      }
    return arr2;
}
