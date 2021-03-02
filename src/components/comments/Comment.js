import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
    
    render(){
        let comment = this.props.comment
        return (
            <li>{comment.name}: {comment.post}</li>
        )
    }
}