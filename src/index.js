const flortagormAPI = "https://distinct-vaulted-freesia.glitch.me/image"
let imageData;

//comment list variable
const commentList = document.getElementById('fg-comments');

//fetch request
fetch(flortagormAPI)
    .then((response) => response.json())
    .then((json) => {imageData = json;
    renderFlortagorm(imageData)
});

//like event listener
document.getElementById('like-button').addEventListener ('click', incrementLikes);

//comment form event listener
document.getElementById('comment-form').addEventListener('submit', addComment);

//full image card function 
function renderFlortagorm(image) {
    const title = document.getElementById('fg-title');
    title.textContent = image.title;

    document.getElementById('fg-image').src = image.image;

    renderLikes(image.likes);

    renderComments(image.comments);
}

//like functions
function incrementLikes() {
    imageData.likes += 1;
    renderLikes(imageData.likes);
}

function renderLikes(likes) {
    document.getElementById('fg-likes').textContent = `${likes} likes`;
}

//comment functions
function addComment(event) {
    event.preventDefault();
    const commentText = event.target.comment.value;
    renderComment({content: commentText});
    event.target.reset();
} 

function renderComments(comments) {
    commentList.innerHTML = '';
    comments.forEach(renderComment);
}

function renderComment(comment) {
    const listItem = document.createElement('li');
    listItem.textContent = comment.content;
    commentList.append(listItem);
}
