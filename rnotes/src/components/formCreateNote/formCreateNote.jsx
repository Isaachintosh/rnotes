import React, { Component } from "react";
import "./style.css"
class FormCreateNote extends Component {
    
    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
        this.category = "Unclassified category"
        this.state = { categories: [] }
        this._newCategories = this._newCategories.bind(this)

    }
    componentDidMount() {
        this.props.categories.subscr(this._newCategories)
    }
    componentWillUnmount() {
        this.props.categories.unsubscr(this._newCategories)
    }
    _newCategories(categories) {
        this.setState({ ...this.state, categories })
    }

    _handleChangeCategory(e) {
        e.stopPropagation()
        this.category = e.target.value
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
        this.props.createNote(this.title, this.text, this.category)
    }

    render(){
        return (
            <form
                className="form-registration"
                onSubmit={this._createNote.bind(this)}
            >
                <select 
                    onChange={this._handleChangeCategory.bind(this)}
                    className="form-registration_input"
                    placeholder="Choose a category"
                >
                    <option>Without category</option>
                    {this.state.categories.map((category, index) => {
                        return (
                            <option key={index} className="category-item">
                                {category}
                            </option>)
                    })}
                </select>
                <input 
                    type="text"
                    placeholder="Title"
                    className="form-registration_input"
                    onChange={this._handleChangeTitle.bind(this)}
                    required={true}
                />
                <textarea
                    rows={15}
                    placeholder="Write your note here..."
                    className="form-registration_input"
                    onChange={this._handleChangeText.bind(this)}
                    required={true}
                />

                <button className="form-registration_input form-registration_submit">
                    Create Note
                </button>
            </form>
        )
    }
}

export default FormCreateNote