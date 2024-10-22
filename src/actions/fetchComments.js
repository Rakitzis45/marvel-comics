export function fetchComments() {
    return (dispatch) => {

        let id = document.location.pathname.split('/')[2]
        dispatch({ type: 'START_ADDING_COMMENTS_REQUEST' });
        fetch(`http://localhost:3000/comments/${id}`)
            .then(resp => resp.json())
            .then(comments => dispatch({ type: 'ADD_COMMENTS', comments }))
    }
}