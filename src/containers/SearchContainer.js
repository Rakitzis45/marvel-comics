import React, { Component } from 'react';
import SearchInput from '../components/search/SearchInput'
import { connect } from 'react-redux'
import { fetchCharacters} from '../actions/fetchCharacters'
import { fetchComics } from '../actions/fetchComics'


class SearchContainer extends Component {

    // componentDidMount(){
    //     console.log(this.props)
    //     // this.props.addSearchWithinDispatch()
    // }

    render(){
        return (
            <div>
                <SearchInput fetchCharacters={this.props.fetchCharacters}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCharacters: () => dispatch(fetchCharacters()),
    fetchComics: () => dispatch(fetchComics())
})

// function mapDistpatchToProps(dispatch){
//     return {
//         addSearchWithinDispatch: () => dispatch(fetchCharacters())
//     }
// }

export default connect(null, mapDispatchToProps)(SearchContainer)