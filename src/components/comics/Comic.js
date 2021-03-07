import React, { Component } from 'react';

class Comic extends Component {

    render() {
        return (
            <>
                <li><a href={`/comics/${this.props.comic.id}`}>{this.props.comic.title}</a></li>
            </>
        )
    }
}

export default Comic