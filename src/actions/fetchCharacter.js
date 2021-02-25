export function fetchCharacter(string){
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_CHARACTER_REQUEST'});
        let md5 = require('md5')
        let date = new Date()
        let timeStamp = date.getTime()
        let hash = md5(`${timeStamp} + "69e7fca49effd63d49364bbe5fe0d748903ec689" + "7d4cc4c53258b0c0a55297421f2f233f"`)
    
        fetch(`https://gateway.marvel.com:443/v1/public/characters/${string}?apikey=7d4cc4c53258b0c0a55297421f2f233f&hash=${hash}`)
        .then(resp => resp.json())
        .then(character => dispatch({type: 'ADD_CHARACTER', character}))
       
    }
}