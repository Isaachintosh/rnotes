import React from 'react';
import { ListOfNotes } from './components/listOfNotes';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Title"/>
        <textarea placeholder="Write your note here..."/>
        <button>Create Note</button>
        <ListOfNotes/>
      </form>
    </section>
  );
}

export default App;
