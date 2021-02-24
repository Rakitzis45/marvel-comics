export default function reducer(state={}, action){
    switch (action.type){
        // case "START_SEARCH":
        //     return 
        // case "SEARCH_CHARACTER":
        //     return
        case "ADD_SEARCH":
            return {...state, searched: action.object}
        default:
            return state;
    }
}

// https://gateway.marvel.com:443/v1/public/characters?name=spider-man&apikey=7d4cc4c53258b0c0a55297421f2f233f