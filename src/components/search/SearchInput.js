import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { fetchCharacters } from '../../actions/fetchCharacters'
import {connect} from 'react-redux'

class SearchInput extends Component {

    state = {
        search_field: ""
    }

    onChange = event => {
        this.setState({
            search_field: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchCharacters(this.state.search_field)
        this.props.history.push('/characters')
    }

    render(){
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <label>Search Characters</label>
                    <input type="text" value={this.state.search_field} onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
            </>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {fetchCharacters: (string) => dispatch(fetchCharacters(string))}
}
export default withRouter(connect(null, mapDispatchToProps)(SearchInput))
// export default connect(null, mapDisptachToProps)(SearchInput)
 
