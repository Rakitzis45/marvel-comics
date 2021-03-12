export function addComment(object) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COMMENT', object })
  }
}