import React, { Component } from 'react';
import Characters from '../components/characters/Characters'
import { connect } from 'react-redux';

class CharacterContainer extends Component {
    render(){
        return (
            <div>
                <Characters characters={this.props.searchResults}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searched
    }
}

export default connect(mapStateToProps)(CharacterContainer)