
export function fetchCharacter(string){
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_CHARACTER_REQUEST'});
        let md5 = require('md5')
        let date = new Date()
        let timeStamp = date.getTime()
        let hash = md5(`${timeStamp} + ${process.env.REACT_APP_API_PRIVATE_KEY} + ${process.env.REACT_APP_PUBLIC_KEY}`)
    
        fetch(`https://gateway.marvel.com:443/v1/public/characters/${string}?apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${hash}`)
        .then(resp => resp.json())
        .then(character => dispatch({type: 'ADD_CHARACTER', character}))
       
    }
}