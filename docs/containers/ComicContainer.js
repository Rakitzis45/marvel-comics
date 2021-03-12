import React, { Component } from 'react';
import Comics from '../components/comics/Comics'
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar'

class ComicsContainer extends Component {
    render(){
        return (
            <div>
                <Navbar/>
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