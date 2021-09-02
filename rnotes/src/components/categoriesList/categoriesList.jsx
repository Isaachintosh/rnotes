import React, { Component } from 'react';
import './style.css'

class CategoriesList extends Component {
    
    constructor(){
        super()
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this)
    }
    
    componentDidMount(){
        this.props.categories.subscr(this._newCategories)
    }

    componentWillUnmount(){
        this.props.categories.unsubscr(this._newCategories)
    }

    _newCategories(categories){
        this.setState({...this.state, categories})
    }
    
    _handleAddCategory(e){
        if(e.key === "Enter"){
            let categoryValue = e.target.value
            this.props.addCategory(categoryValue)
        }
    }
    
    render() { 
        return (
            <section className="categories-content">
                <ul className="categories-list">
                    {this.state.categories.map((category, index) => {
                        return (
                            <li
                                className="category-item"
                                key={index}
                            >
                                {category}
                            </li>)
                    })}
                </ul>
                <input
                    type="text"
                    className="category_input"
                    placeholder="add category here"
                    onKeyUp={this._handleAddCategory.bind(this)}
                />
            </section>
        );
    }
}

export default CategoriesList