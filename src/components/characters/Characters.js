import React, { Component } from 'react';
import Character from './Character';

class Characters extends Component {

    render(){
        return (
            <div className="row align-items-center my-5 border border-secondary">
            <h1>Characters</h1>
                <ol>
                    {this.props.characters ? this.props.characters.map(character => <Character key={character.id} character={character} />) : "No Characters"}
                </ol>
            </div>
        )
    }
}

export default Characters