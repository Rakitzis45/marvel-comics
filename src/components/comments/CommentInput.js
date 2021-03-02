import React, { PureComponent } from 'react';
import { submitComment } from '../../actions/submitComment'
import { addComment } from '../../actions/addComment'
import { connect } from 'react-redux'

class CommentInput extends PureComponent {

    state = {
        name: "",
        post: "",
        id: document.location.pathname.split('/')[2]
    }

    handleNameChange = (event) => {
        this.setState({ 
            name: event.target.value
        })
    }

    handlePostChange = (event) => {
        this.setState({ 
            post: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.addComment(this.state);
        submitComment(this.state);
        this.setState({ ...this.state,
            name: "",
            post: ""
        })
    }



    render(){
        return(
            <>
                <h3>Leave a Comment</h3><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} /><br/>
                    <label>Comment: </label>
                    <input type='text_area' value={this.state.post} onChange={this.handlePostChange} /><br/>
                    <input type='submit' />
                </form>
            </>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        addComment:(object) => dispatch(addComment(object))
    }
}

export default connect(null, mapDispatchToProps)(CommentInput)