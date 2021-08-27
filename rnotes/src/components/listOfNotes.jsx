import React, { Component } from "react";
import CardNote from "./cardNote/cardNote";

class ListOfNotes extends Component {
    render(){
        return (
            <ul>
                {Array.of("Works", "Works", "Studies").map((categories, index) => {
                    return (
                        <li key={index}>
                            <h3>{categories}</h3>
                            <CardNote/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListOfNotes