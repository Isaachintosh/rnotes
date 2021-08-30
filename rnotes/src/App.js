import React, { Component } from 'react';
import FormCreateNote from './components/formCreateNote';
import ListOfNotes from './components/listOfNotes';
import './assets/App.css'
import './assets/index.css'

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }
  createNote(title, text){
    const newNote = {title, text}
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes:newArrayNotes
    }
    this.setState(newState)
  }
  _deleteNote(index, e){
    if(window.confirm('Are you sure to delete this note?')){
      let arrayOfNotes = this.state.notes
      arrayOfNotes.splice(index, 1)
      this.setState({notes: arrayOfNotes})
    } else {
      return
    }
  }

  render() {
    return (
      <section className="content">
        <FormCreateNote createNote={this.createNote.bind(this)}/>
        <ListOfNotes
          deleteNote={this._deleteNote.bind(this)}
          notes={this.state.notes}
        />
      </section>
    );
  }
}

export default App;
