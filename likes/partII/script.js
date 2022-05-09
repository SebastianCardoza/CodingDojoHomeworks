var likes = [9, 12, 9];

function like(i){
    likes[i]++;
    document.querySelector("#likeCount"+i).innerText=likes[i] +" like(s)";  
}