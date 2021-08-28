import React, { Component } from "react";
import CardNote from "../cardNote/cardNote";
import "./style.css"

class ListOfNotes extends Component {

    render(){
        return (
            <ul className="list-notes">
                {this.props.notes.map((note, index) => {
                    return (
                        <li className="list-notes_item" key={index}>
                            <CardNote title={note.title} text={note.text}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListOfNotes