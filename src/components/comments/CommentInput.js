import React, { Component } from 'react';
import {connect} from 'react-redux'
import { submitComment } from '../../actions/submitComment'
// marvel-comics/src/actions/submitComment.js
// marvel-comics/src/components/comments/CommentInput.js

class CommentInput extends Component {

    state = {
        comment_name: "",
        comment_post: "",
        id: document.location.pathname.split('/')[2]
    }

    handleNameChange = (event) => {
        this.setState({ 
            comment_name: event.target.value
        })
    }

    handlePostChange = (event) => {
        this.setState({ 
            comment_post: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        submitComment(this.state)
        
    }



    render(){
        return(
            <>
                <h3>Leave a Comment</h3><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' value={this.state.comment_name} onChange={this.handleNameChange} /><br/>
                    <label>Comment: </label>
                    <input type='text_area' value={this.state.comment_post} onChange={this.handlePostChange} /><br/>
                    <input type='submit' />
                </form>
            </>
        )
    }

}

export default CommentInput