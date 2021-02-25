import React, { Component } from 'react';

class Character extends Component {

    render() {
       return (
            <> 
                <li><a href={`/characters/${this.props.character.id}`}>{this.props.character.name}</a></li>
            </>
        )
    }
}

export default Character