import React, { Component } from 'react';
import Comics from '../components/comics/Comics'
import { connect } from 'react-redux';

class ComicsContainer extends Component {
    render(){
        return (
            <div>
                <Comics comics={this.props.searchResults}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searched
    }
}

export default connect(mapStateToProps)(ComicsContainer)