import React, { Component } from 'react';
import Comic from './Comic';

class Comics extends Component {

    render(){
        return (
            <>
            <h1>Comics</h1>
                <ol>
                    {this.props.comics ? this.props.comics.map(comic => <Comic key={comic.id} comic={comic} />) : "No Comics"}
                </ol>
            </>
        )
    }
}

export default Comics