import notesdb from './notes.json'
import fs from 'fs'

let notes = notesdb

const path = `${__dirname}/notes.json`

export function writeNotes(notePush) {
    if (!Array.isArray(notePush)) {
        notes.push(notePush)
    }
    fs.writeFileSync(path, JSON.stringify(notes))
}

export function readNotes(){
   return notes
}

export function deleteNote(noteid) {
    notes = notes.filter(note => note.id !== noteid)
    fs.writeFileSync(path, JSON.stringify(notes))
}

export function updateNote(note){
    notes = notes.map(noteE => {
        if(noteE.id === note.id ) return note
    })
    writeNotes(notes)
}