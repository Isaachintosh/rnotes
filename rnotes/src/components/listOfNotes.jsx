import React, { Component } from "react";
import CardNote from "./cardNote";

class ListOfNotes extends Component {
    render(){
        return (
            <ul>
                <li>
                    <CardNote/>
                </li>
                <li>
                    <CardNote/>
                </li>
                <li>
                    <CardNote/>
                </li>
            </ul>
        );
    }
}

export default ListOfNotes