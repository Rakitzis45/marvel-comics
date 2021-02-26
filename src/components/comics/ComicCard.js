import React, { Component } from 'react'

export default class ComicCard extends Component {
    
    displayCharacters = () => {
        let characters = this.props.comic.characters.items
        return (
            <ol>
                {characters.map(character => <li><a href={`/characters/${character.resourceURI.split('/')[6]}`}>{character.name}</a></li>)}
            </ol>
        )
    }

    // "2011-04-27T00:00:00-0400"
    displayDate = (date) => {
        return (date.split('T')[0])
    }

    
    
    render(){
        let comic = this.props.comic
        return (
        <div>
            
            <div>
                <h1>{comic.title}</h1>
                <img className='comicShowImg' src={comic.thumbnail.path + ".jpg"}/>
                <div className='comicDescription'>
                    <strong>Description: </strong> {comic.description} <br/>
                    <strong>Release Date: </strong> {this.displayDate(comic.dates[0].date)}<br/>
                </div>
                <br/>
                <div className='comicCharacters'><strong>Characters: {this.displayCharacters()}</strong></div>
                
            </div> 
        </div>
        
        )
    }
}