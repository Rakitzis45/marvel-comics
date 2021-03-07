import React, { Component } from 'react';
import SearchInput from '../components/search/SearchInput'
import { connect } from 'react-redux'
import { fetchCharacters} from '../actions/fetchCharacters'
import { fetchComics } from '../actions/fetchComics'


class SearchContainer extends Component {

    render(){
        return (
            <div className="border border-secondary">
                <h1>Character and Comic Search</h1><br/>
                <SearchInput fetchCharacters={this.props.fetchCharacters}/>
                <br/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCharacters: () => dispatch(fetchCharacters()),
    fetchComics: () => dispatch(fetchComics())
})

export default connect(null, mapDispatchToProps)(SearchContainer)