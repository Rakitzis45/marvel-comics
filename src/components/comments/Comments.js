import React, { PureComponent } from 'react';
import Comment from './Comment';


class Comments extends PureComponent {

    render() {
        return (
            <>
                <h1 className="comments-title">Comments ({this.props.comments.length})</h1>
                <ul>
                    {this.props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                </ul>
            </>
        )
    }
}

export default Comments
