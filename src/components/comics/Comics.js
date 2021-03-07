import React, { Component } from 'react';
import Comic from './Comic';

class Comics extends Component {

    render(){
        return (
            <div className="row align-items-center my-5 border border-secondary">
            <h1>Comics</h1>
                <ol>
                    {this.props.comics ? this.props.comics.map(comic => <Comic key={comic.id} comic={comic} />) : "No Comics"}
                </ol>
            </div>
        )
    }
}

export default Comics