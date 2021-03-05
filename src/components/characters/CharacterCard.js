import React, { Component } from 'react'

export default class CharacterCard extends Component {
    displayComics = () => {
       let comics = this.props.character.comics
       return (
           <>
                <span className='comicContainer'>
                    <br/>
                    <ol className='comicList'>
                        <p><strong>Total Comics:</strong> {comics.available}</p>
                        {comics.items.map((comic, index) => <li key={index}><a href={`/comics/${comic.resourceURI.split('/')[6]}`}>{comic.name}</a></li>)}  
                    </ol>
                </span>     
           </>
       )
    }
    displayOfficalPage = () => {
        let links = this.props.character.urls
        
        let link = links.find(link => {
            if (link.type === 'wiki'){
                return link.url
            } else {
                return false
            }
        })
        if (link){
            return (<a href={link.url} target="_blank" rel="noreferrer">Offical Page</a>)
        }
        
    }

    render(){
        
        let character = this.props.character
        return (
            <div>
                <h1>{character.name}</h1>
                
                <div className="characterInformation">
                    <img className="characterShowImg"src={character.thumbnail.path + ".jpg"} alt="characterImg"/>
                    <span className='characterDescription'> <strong>Description:</strong>  {character.description}</span>
                    <span className='characterComics'> 
                        {this.displayComics()}
                    </span>
                    <span>{this.displayOfficalPage()}</span>
                </div>
            </div>
        )
    }
}
