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
        this.setState({
            ...this.state,
            name: "",
            post: ""
        })
    }



    render() {
        return (
            <div>
                <h3>Leave a Comment</h3><br />
                <form className="form-block" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <input className="form-input" placeholder="Your Name" type='text' value={this.state.name} onChange={this.handleNameChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <textarea className="form-input" value={this.state.post} onChange={this.handlePostChange} required="" placeholder="Your Comment"></textarea>
                        </div>
                    </div>
                    <input className="btn btn-primary center" type='submit' />
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (object) => dispatch(addComment(object))
    }
}

export default connect(null, mapDispatchToProps)(CommentInput)