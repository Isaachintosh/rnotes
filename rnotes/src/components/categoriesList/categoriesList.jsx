import React, { Component } from 'react';
import './style.css'

class CategoriesList extends Component {
    state = {  }
    render() { 
        return (
            <section className="categories-content">
                <ul className="categories-list">
                    <li className="category-item">Category</li>
                    <li className="category-item">Category</li>
                    <li className="category-item">Category</li>
                    <li className="category-item">Category</li>
                </ul>
                <input
                    type="text"
                    className="form-registration_input"
                />
            </section>
        );
    }
}

export default CategoriesList