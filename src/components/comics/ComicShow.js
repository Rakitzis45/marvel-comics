import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchComic } from '../../actions/fetchComic'
import ComicCard from './ComicCard'
import CommentContainer from '../../containers/CommentContainer'
import Navbar from '../navbar/Navbar'

class ComicShow extends PureComponent {

    componentDidMount() {
        this.props.fetchComic(document.location.pathname.split('/')[2])
    }


    loading = () => {
        if (this.props.requesting === false) {
            return (
                <>
                    <Navbar />
                    <div className="container">
                        <ComicCard comic={this.props.comic} />
                        <CommentContainer />
                    </div>
                </>
            )
        } else {
            return <div>Loading</div>
        }
    }

    render() {
        console.log(this.props.requesting);
        return (
            <div>
                {this.loading()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchComic: (string) => dispatch(fetchComic(string)) }
}

const mapStateToProps = (state) => {
    return {
        comic: state.comic,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicShow)