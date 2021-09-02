export default class ArrayOfNotes{
    constructor(){
        this.notes = []
        this._subscribers = []
    }
    
    addNote(title, text, category) {
        const newNote = new Note(title, text, category)
        this.notes.push(newNote)
        this.notify()
    }

    deleteNote(index){
        if(window.confirm('Are you sure to delete this note?')){
            this.notes.splice(index, 1)
            this.notify()
        } else {
            return
        }
    }

    subscr(func){
        this._subscribers.push(func)
    }

    notify(){
        this._subscribers.forEach(func => {
            func(this.notes)
        })
    }
}

class Note{
    constructor(title, text, category){
        this.title = title
        this.text = text
        this.category = category
    }
}