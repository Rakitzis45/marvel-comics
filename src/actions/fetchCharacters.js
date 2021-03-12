export function fetchCharacters(string) {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_CHARACTERS_REQUEST' });
        let md5 = require('md5')
        let date = new Date()
        let timeStamp = date.getTime()
        let hash = md5(`${timeStamp} + ${process.env.REACT_APP_API_PRIVATE_KEY} + ${process.env.REACT_APP_API_PUBLIC_KEY}`)
        console.log(process.env.REACT_APP_API_PRIVATE_KEY)
        console.log(process.env.REACT_APP_API_PUBLIC_KEY)
        console.log(hash)
        fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${string}&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            // .then(characters => dispatch({ type: 'ADD_SEARCH_CHARACTERS', characters }))
    }
}