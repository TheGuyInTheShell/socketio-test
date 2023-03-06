import express from "express"
import {Server as socketServer} from 'socket.io'
import http from 'http'
import {v4 as uuid} from 'uuid'
import {deleteNote, readNotes, updateNote, writeNotes} from './notes'


const app = express()
const server = http.createServer(app)
const io = new socketServer(server)


app.use(express.static(`${__dirname}/public`))

io.on('connection', (socket)=> {
    console.log('nueva conexion: ', socket.id)

    socket.emit('sv:loadnotes', readNotes())

    socket.on('cli:deletenote', note => {
        deleteNote(note)
        io.emit('sv:loadnotes', readNotes())
    })

    socket.on('cli:newnote', (newNote)=> {
        const note = {
            id: uuid(),
            ...newNote,
        }
        writeNotes(note)
        io.emit('sv:newnote', note)
    })

    socket.on('cli:updatenote', newNote=>{
        updateNote(newNote)
        io.emit('sv:loadnotes', readNotes())
    })
    
})


server.listen(3000, ()=>{
    console.log('escuchando por el puerto: ', 3000)
})