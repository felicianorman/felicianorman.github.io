// Bild 

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/loke.jpeg') {
        myImage.setAttribute('src','images/loke2.jpeg');
    } else {
     myImage.setAttribute('src','images/loke.jpeg');
    
    }
}

// Personligt meddelande

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Välkommen hit, ' + myName;
    }      
}

if(!localStorage.getItem('name')) {
    setUserName();
    } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Välkommen hit, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
