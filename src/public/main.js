const noteForm = $('#noteForm')
const title = $('#title')
const description = $('#description')


noteForm.addEventListener('submit', e => {
    e.preventDefault()
    savedId ?
        socketUpdateNote(title.value, description.value, savedId)
     :
        saveNote(title.value, description.value)
    
    title.value = ''
    description.value = '' 
    savedId = ''
    title.focus
})