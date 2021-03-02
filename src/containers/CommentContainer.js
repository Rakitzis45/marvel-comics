import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { fetchComments } from '../actions/fetchComments'


class CommentContainer extends PureComponent {

    componentDidMount() {
        this.props.fetchComments()
    }

    // shouldComponentUpdate(nextState){
    //     debugger
    //     if (this.props.comments !== nextState.comments){
    //         debugger
    //         return true
    //     }
    //     return false
    // }

    handleClick = (e) => {
        this.props.fetchComments()
    }

    render(){
        return ( 
            <div>
                <button onClick={this.handleClick}>Comments</button>
                <CommentInput/>
                <Comments comments={this.props.comments}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(fetchComments())
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(CommentContainer)