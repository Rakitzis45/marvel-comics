export default function reducer(state = {
    comments: []
}, action) {
    switch (action.type) {

        case "START_ADDING_CHARACTERS_REQUEST":
            return {
                ...state,
                searched: [],
                requesting: true
            }
        case "ADD_SEARCH_CHARACTERS":
            return {
                ...state,
                searched: action.characters.data.results,
                requesting: false
            }

        case "START_ADDING_COMMENTS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ADD_COMMENTS":
            return {
                ...state,
                comments: action.comments,
                loading: false
            }

        case "ADD_COMMENT":

            return {
                ...state,
                comments: [...state.comments, action.object],
            }

        case "START_ADDING_COMICS_REQUEST":
            return {
                ...state,
                searched: [],
                requesting: true
            }
        case "ADD_SEARCH_COMICS":
            return {
                ...state,
                searched: action.comics.data.results,
                requesting: false
            }


        case "START_ADDING_CHARACTER_REQUEST":
            return {
                ...state,
                character: "",
                requesting: true
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
