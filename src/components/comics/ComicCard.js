import React, { PureComponent } from 'react'

export default class ComicCard extends PureComponent {
    
    displayCharacters = () => {
        let characters = this.props.comic.characters.items
        return (
            <ol>
                {characters.map((character, index) => <li key={index}><a href={`/characters/${character.resourceURI.split('/')[6]}`}>{character.name}</a></li>)}
            </ol>
        )
    }

    displayDate = (date) => {
        return (date.split('T')[0])
    }

    
    
    render(){
        let comic = this.props.comic
        return (
        <div>
            
            <div>
                <h1>{comic.title}</h1>
                <img className='comicShowImg' src={comic.thumbnail.path + ".jpg"} alt="comicCover"/>
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