import React, { Component } from 'react';
import './style.css'
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg'

class CardNote extends Component {    
    eraseNote(){
        const index = this.props.index
        this.props.deleteNote(index)
    }
    
    render() { 
        return (
            <section className="card-note">
                <header className="card-note_header">
                    <h3 className="card-note_title">{this.props.title}</h3>
                    <div>
                        <DeleteSVG
                            className="btn-delete"
                            onClick={this.eraseNote.bind(this)}
                        />
                    </div>
                </header>
                <p className="card-note_text">{this.props.text}</p>

            </section>
        );
    }
}

export default CardNote;