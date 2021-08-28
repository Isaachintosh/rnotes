import React, { Component } from 'react';
import FormCreateNote from './components/formCreateNote';
import ListOfNotes from './components/listOfNotes';
import './App.css'
import './index.css'

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
  render() {
    return (
      <section className="content">
        <FormCreateNote createNote={this.createNote.bind(this)}/>
        <ListOfNotes notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
