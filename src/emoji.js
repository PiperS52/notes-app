function convert() {
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
    document.getElementById("noteList").insertAdjacentHTML('afterend', `<p>${data.emojified_text}</p>`);
  })
}
