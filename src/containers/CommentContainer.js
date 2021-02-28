import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'

class CommentContainer extends Component {
    render(){
        return ( 
            <div>
                
                <CommentInput/>
            </div>
        )
    }
}

export default CommentContainer