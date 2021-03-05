import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { fetchComments } from '../actions/fetchComments'


class CommentContainer extends PureComponent {

    componentDidMount() {
        this.props.fetchComments()
    }

    handleClick = (e) => {
        this.props.fetchComments()
    }

    render() {
        return (
            <div className="row align-items-center my-5 be-comment-block border border-secondary">
                <CommentInput />
                <Comments comments={this.props.comments} />
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


export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)