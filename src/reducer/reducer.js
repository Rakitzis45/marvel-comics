export default function reducer(state={}, action){
    switch (action.type){
        // case "START_SEARCH":
        //     return 
        // case "SEARCH_CHARACTER":
        //     return
        case "START_ADDING_CHARACTERS_REQUEST":
            return {
                ...state, 
                searched: [],
                requesting: true
            }
        case "START_ADDING_CHARACTER_REQUEST":
            return { 
                ...state, 
                character: "",
                requesting: true
            }
        case "ADD_SEARCH":
            return {
                ...state, 
                searched: action.characters.data.results,
                requesting: false
            }
        case "ADD_CHARACTER":
            return {
                ...state,
                character: action.character.data.results[0],
                requesting: false
            }
        case "START_ADDING_COMIC_REQUEST":
            return {
                ...state, 
                comic: "",
                requesting: true
        }
        case "ADD_COMIC":
            return {
                ...state, 
                comic: action.comic.data.results[0],
                requesting: false
            }
        default:
            return state;
    }
}

// https://gateway.marvel.com:443/v1/public/characters?name=spider-man&apikey=7d4cc4c53258b0c0a55297421f2f233f