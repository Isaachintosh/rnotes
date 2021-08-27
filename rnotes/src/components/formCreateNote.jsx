import React, { Component } from "react";

class FormCreateNote extends Component {
    render(){
        return (
            <form>
                <input type="text" placeholder="Title"/>
                <textarea placeholder="Write your note here..."/>
                <button>Create Note</button>
            </form>
        )
    }
}

export default FormCreateNote