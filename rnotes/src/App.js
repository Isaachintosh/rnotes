import React, { Component } from 'react';
import FormCreateNote from './components/formCreateNote';
import CategoriesList from './components/categoriesList/categoriesList';
import ListOfNotes from './components/listOfNotes';
import './assets/App.css'
import './assets/index.css'
import Categories from './data/Categories';
import ArrayOfNotes from './data/Notes';

class App extends Component {

  constructor(){
    super();
    this.categories = new Categories()
    this.notes = new ArrayOfNotes()
  }
  

  render() {
    return (
      <section className="content">
        <FormCreateNote
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="main-content">
          <CategoriesList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <ListOfNotes
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
