const socket = io()

const saveNote = (title, description) => {
    socket.emit('cli:newnote', {
        title,
        description,
    })
}

const socketDeleteNote = noteid => {
    socket.emit('cli:deletenote', noteid)
}

const socketUpdateNote = (title, description, id) => {
    console.log('up')
    socket.emit('cli:updatenote', {title, description, id})
}

socket.on('sv:newnote', createNote)

socket.on('sv:loadnotes', renderNotes)