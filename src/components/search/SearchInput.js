import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { fetchCharacters } from '../../actions/fetchCharacters'
import { fetchComics } from '../../actions/fetchComics'
import {connect} from 'react-redux'

class SearchInput extends Component {

    state = {
        search_character: "",
        search_comic: ""
    }

    characterChange = event => {
        this.setState({
            search_character: event.target.value
        })
    }

    comicChange = event => {
        this.setState({
            search_comic: event.target.value
        })
        
    }

    onSubmitCharacter = (e) => {
        e.preventDefault()
        this.props.fetchCharacters(this.state.search_character)
        this.props.history.push('/characters')
    }

    onSubmitComic = (e) => {
        e.preventDefault()
        this.props.fetchComics(this.state.search_comic)
        this.props.history.push('/comics')
    }

    render(){
        return (
            <>
                <form onSubmit={this.onSubmitCharacter}>
                    <label>Search Characters: </label>
                    <input type="text" value={this.state.search_character} onChange={this.characterChange}/>
                    <input type="submit"/>
                </form>
                <br/>
                <form onSubmit={this.onSubmitComic}>
                    <label>Search Comics: </label>
                    <input type="text" value={this.state.search_comic} onChange={this.comicChange}/>
                    <input type="submit"/>
                </form>
                
            </>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchCharacters: (string) => dispatch(fetchCharacters(string)),
        fetchComics: (string) => dispatch(fetchComics(string))
    }
}
export default withRouter(connect(null, mapDispatchToProps)(SearchInput))
// export default connect(null, mapDisptachToProps)(SearchInput)
 
