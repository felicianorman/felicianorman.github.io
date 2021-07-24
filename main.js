let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/loke.jpeg') {
        myImage.setAttribute('src','images/loke2.jpeg');
    } else {
     myImage.setAttribute('src','images/loke.jpeg');
    }
}