import React, { Component } from 'react';
import Characters from '../components/characters/Characters'
import { connect } from 'react-redux';
import NavBar from '../components/navbar/Navbar'

class CharacterContainer extends Component {
    render(){
        return (
            <div>
                <NavBar/>
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