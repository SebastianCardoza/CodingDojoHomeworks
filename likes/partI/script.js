var likes = 3;
var likeCount = document.querySelector("#likeCount");

function like(){
    likes++;
    likeCount.innerText = likes + " like(s)";
}