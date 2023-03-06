const notesSection = $('#notes')

const printNote = note => {
    const div = document.createElement('div')
    div.id = note.id
    div.innerHTML += 
            `<article class="card card-body rounded-0 p-3 my-1 animate__animated animate__fadeInUp">
            <div class="d-flex flex-row align-items-center justify-content-between my-1">
                <h2 class="card-title title">${note.title}</h2>
                <div>
                <button data-id="${note.id}" class="btn btn-danger" onclick="deleteNote(this)">delete</button>
                <button data-id="${note.id}" id="update" class="btn btn-secondary">update</button>
                </div>
            </div>
            <p class="my-1 description">${note.description}<p>
            </article>`

    const btnUpdate = div.querySelector('#update')

    btnUpdate.addEventListener('click', e => {
        putInForm(btnUpdate.dataset.id)
    })

    return div
}

const createNote = note => {
    notesSection.appendChild(printNote(note))
}

const renderNotes = notes => {
    notesSection.innerHTML = ''
    
    if(notes.length){
        notes.forEach(note => {
            setTimeout(()=> {
                notesSection.appendChild(printNote(note))
            })
        })
    }
}