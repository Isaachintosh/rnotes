import React, { Component } from "react";
import "./style.css"
class FormCreateNote extends Component {
    
    constructor(props){
        super(props);
        this.title = "";

    }

    _handleChangeTitle(e){
        e.stopPropagation()
        this.title = e.target.value
    }
    
    _handleChangeText(e){
        e.stopPropagation()
        this.text = e.target.value
    }

    _createNote(e){
        e.preventDefault()
        e.stopPropagation()
        this.props.createNote(this.title, this.text)
    }

    render(){
        return (
            <form
                className="form-registration"
                onSubmit={this._createNote.bind(this)}
            >
                <input 
                    type="text"
                    placeholder="Title"
                    className="form-registration_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Write your note here..."
                    className="form-registration_input"
                    onChange={this._handleChangeText.bind(this)}
                />
                <button className="form-registration_input form-registration_submit">
                    Create Note
                </button>
            </form>
        )
    }
}

export default FormCreateNote