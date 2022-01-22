let landingContainer = document.getElementsByClassName('landing__container');
let newElementArray = [];
let section = document.querySelectorAll('section');


for(let i=0; i<landingContainer.length-1; i++){

    // let listTag = document.createElement('li')
    let anchorTag = document.createElement('a');

    let idForUl = document.querySelector('#navbar__list');
    let childAnchor = idForUl.appendChild(anchorTag);
    // childAnchor.appendChild(anchorTag);
    
    let navText = ['About','Menu','Contact'];
    anchorTag.textContent = navText[i]
    anchorTag.setAttribute('id', "rightNav")  
    // anchorTag.setAttribute('class', "section"+(i+1));
    // anchorTag.setAttribute('class', "push");
    newElementArray.push(anchorTag);

}