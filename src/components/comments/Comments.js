import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';

class Comments extends Component {

    componentDidMount(){
        //have to fetch comments from the backend
    }
    

    render(){
        return (
            <> 
                <h1>Comments</h1>
                {/* <ol> {this.props.comments.map(comment => <Comment comment={comment}/>)} </ol> */}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comments)