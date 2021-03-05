import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
    
    render(){
        let comment = this.props.comment
        return (
            <div className="be-comment">
                <div className="be-comment-content">
                    <span className="be-comment-name">{comment.name}</span>
                    {/* {comment.created_at} */}
                    <p className="be-comment-text">
                        {comment.post}
                    </p>
                </div>
            </div>


            // <li>{comment.name}: {comment.post}, </li>
        )
    }
}