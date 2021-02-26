import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComic } from '../../actions/fetchComic'
import ComicCard from './ComicCard'


class ComicShow extends Component {

    componentDidMount(){
        this.props.fetchComic(document.location.pathname.split('/')[2])
    }

    loading = () => {
        if (this.props.requesting === false){
            return <div>
                <ComicCard comic={this.props.comic}/>
                </div>
        } else {
            return <div>Loading</div>
        }
    }
     
    render() {
        return(
            <div>
                {this.loading()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {fetchComic: (string) => dispatch(fetchComic(string))}
}

const mapStateToProps = (state) => {
    return {
        comic: state.comic,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicShow)