export function submitComment(object){
    let id = object.id
    fetch(`http://localhost:3000/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            comment: {
                character_comic_id: id,
                name: object.comment_name,
                post: object.comment_post
            }
        })
    })
}