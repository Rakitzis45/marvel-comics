import React, { Component } from 'react';
import SearchInput from '../components/search/SearchInput'
import { connect } from 'react-redux'


class SearchContainer extends Component {

    apiCall = (string) => {
        let md5 = require('md5')
        let date = new Date
        let timeStamp = date.getTime()
        let hash = md5(timeStamp + "69e7fca49effd63d49364bbe5fe0d748903ec689" + "7d4cc4c53258b0c0a55297421f2f233f")
        
        fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${string}&apikey=7d4cc4c53258b0c0a55297421f2f233f&hash=${hash}`)
        .then(resp => resp.json())
        .then(json => this.props.addSearch(json.data.results))
      }

    render(){
        return (
            <div>
                <SearchInput apiCall={this.apiCall} addSearch={this.props.addSearch}/>
            </div>
        )
    }
}

const mapDistpatchToProps = dispatch => ({
    addSearch: object => dispatch({type: "ADD_SEARCH", object})
    
})

export default connect(null, mapDistpatchToProps)(SearchContainer)