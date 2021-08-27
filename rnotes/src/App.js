import React, { Component } from 'react';
import FormCreateNote from './components/formCreateNote';
import ListOfNotes from './components/listOfNotes';

class App extends Component {
  render() {
    return (
      <section>
        <FormCreateNote/>
        <ListOfNotes/>
      </section>
    );
  }
}

export default App;
