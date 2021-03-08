export function fetchComic(string) {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_COMIC_REQUEST' });
        let md5 = require('md5')
        let date = new Date()
        let timeStamp = date.getTime()
        let hash = md5(`${timeStamp} + ${process.env.REACT_APP_API_PRIVATE_KEY} + ${process.env.REACT_APP_API_PUBLIC_KEY}`)

        fetch(`https://gateway.marvel.com:443/v1/public/comics/${string}?apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(comic => dispatch({ type: 'ADD_COMIC', comic }))
    }
}