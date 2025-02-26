import React, { Component } from 'react'
import { fetchCharacter } from '../../actions/fetchCharacter'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard'
import CommentContainer from '../../containers/CommentContainer'
import Navbar from '../navbar/Navbar'

class CharacterShow extends Component {

    componentDidMount() {
        this.props.fetchCharacter(document.location.pathname.split('/')[2])
    }

    loading = () => {
        if (this.props.requesting === false) {
            return (
                <>
                    <Navbar />
                    <div className="container">
                        <CharacterCard character={this.props.character} />
                        <CommentContainer />
                    </div>
                </>
            )
        } else {
            return <div>Loading</div>
        }
    }

    render() {
        return (
            <div>
                {this.loading()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchCharacter: (string) => dispatch(fetchCharacter(string)) }

}

const mapStateToProps = (state) => {
    return {
        // character: state.character,
        character: state.character,
        requesting: state.requesting
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterShow)