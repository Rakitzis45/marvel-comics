import React, { PureComponent } from 'react'

export default class ComicCard extends PureComponent {

    displayCharacters = () => {
        let characters = this.props.comic.characters.items
        return (
            <span className='characterContainer'>
                <ol>
                    {characters.map((character, index) => <li key={index}><a href={`/characters/${character.resourceURI.split('/')[6]}`}>{character.name}</a></li>)}
                </ol>
            </span>

        )
    }

    displayDate = (date) => {
        return (date.split('T')[0])
    }



    render() {
        let comic = this.props.comic
        return (
            <div className="row align-items-center- my-5">
                <div className="col-lg-7">
                    <img className='img-fluid rounded mb-4 mb-lg-0' src={comic.thumbnail.path + ".jpg"} alt="comicCover" />
                </div>
                <div className="col-lg-5 border border-secondary">
                    <h1>{comic.title}</h1>
                    <span className="comicDescription"><strong>Description: </strong> {comic.description}  </span>
                    <br />
                    <span><strong>Release Date: </strong> {this.displayDate(comic.dates[0].date)} </span>
                    <br />
                    <span><strong>Characters{this.displayCharacters()}</strong></span>
                </div>
            </div>
        )
    }
}