import React, { Component } from 'react';
import Character from './Character';

class Characters extends Component {

    render(){
        return (
            <>
            <h1>Characters</h1>
                <ol>
                    {this.props.characters ? this.props.characters.map(character => <Character key={character.id} character={character} />) : "No Characters"}
                </ol>
            </>
        )
    }
}

export default Characters