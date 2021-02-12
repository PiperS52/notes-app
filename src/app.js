
let note = new Note();

document.addEventListener("DOMContentLoaded", function() {

  let button = document.getElementById("create")

  button.addEventListener("click", function() {
    let noteContent = document.getElementById("input").value;
    note.createNote(noteContent);
    document.getElementById("input").value = "";
    let newEntry = note.getAbbrevNoteList().slice(-1)[0]

    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: newEntry
      })
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      console.log(data)
      document.getElementById("noteList").insertAdjacentHTML('afterend', `<a href="#${note.getFullNoteList().length-1}">${data.emojified_text}</a><br>`);
    })
  });

  window.addEventListener("hashchange", function() {
    let index = location.hash.split("#")[1];
    let fullNote = note.getFullNoteList()[index]

    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: fullNote
      })
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      console.log(data)
      document.getElementById("fullNoteDisplay").innerHTML= `${data.emojified_text}`
    })
  });

});
