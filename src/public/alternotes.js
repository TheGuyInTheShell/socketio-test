let savedId = ''

function deleteNote(note) {
    socketDeleteNote(note.dataset.id) //alternative noteid.getAttribute('data-id')
}

function putInForm(noteid) {
    savedId = noteid
    const note = document.getElementById(noteid)
    title.value = note.querySelector('.title').textContent
    description.value = note.querySelector('.description').textContent
}