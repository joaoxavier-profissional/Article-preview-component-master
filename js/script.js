const share = document.getElementById('share-container');
const button = document.querySelector('button');

button.onclick = function() {
    button.classList.toggle('active');
    share.classList.toggle('active');
    if(share.className !== 'active') {
        share.style.display = "none";
    } else {
        share.style.display = "flex"
    }
}
