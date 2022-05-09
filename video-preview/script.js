console.log("page loaded...");
function preview(element){
    element.muted = true;
    element.play()
}
function previewend(element){
    element.currentTime =  0;
    element.muted = false;
    element.pause()

}