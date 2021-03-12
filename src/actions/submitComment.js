export function submitComment(object) {
    let id = object.id
    fetch(`https://marvelcomicssearch.herokuapp.com/comments/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            comment: {
                character_comic_id: id,
                name: object.name,
                post: object.post
            }
        })
    })
}