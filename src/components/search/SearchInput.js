import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

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
        this.props.apiCall(this.state.search_field)
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
                {this.state.search_field}
            </>
        )
    }
}

export default withRouter(SearchInput)