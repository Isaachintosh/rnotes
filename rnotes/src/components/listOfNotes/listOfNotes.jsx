import React, { Component } from "react";
import CardNote from "../cardNote/cardNote";
import "./style.css"

class ListOfNotes extends Component {

    constructor(){
        super()
        this.state = { notes:[] }
        this._newNotes = this._newNotes.bind(this)
    }

    componentDidMount(){
        this.props.notes.subscr(this._newNotes)
    }

    componentWillUnmount(){
        this.props.notes.unsubscr(this._newNotes)
    }

    _newNotes(notes){
        this.setState({ ...this.state, notes })
    }
    render(){
        return (
            <ul className="list-notes">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="list-notes_item" key={index}>
                            <CardNote
                                index={index}
                                deleteNote={this.props.deleteNote}
                                title={note.title}
                                text={note.text}
                                category={note.category}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListOfNotes