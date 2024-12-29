let nvaElements=document.querySelectorAll('nav a');
let listElements=document.querySelectorAll('ul li');
let projElements=document.querySelectorAll('.projects .project');


nvaElements.forEach(element => {

    element.onclick=function (){
        removeBg(nvaElements);
        element.classList.add('active');
    }

});

listElements.forEach(element => {

    element.onclick=function (){
        removeBg(listElements);
        filterProjet(element);
        element.classList.add('active');
    }

});

function removeBg(arr){
    arr.forEach(e => {
        e.classList.remove('active');
    })
}

function filterProjet( element ) {
    projElements.forEach( e => {
        e.lastElementChild.parentElement.style.display='unset';

        if( e.lastElementChild.textContent!=element.textContent){
                e.lastElementChild.parentElement.style.display='none';
        }
        if('all'==element.textContent){
            e.lastElementChild.parentElement.style.display='unset';
        }
    })
}

projElements.forEach(element => {

    element.onmouseleave=()=>{
        // element.firstElementChild.removeAttribute(document.createAttribute('autoplay'));
        element.firstElementChild.removeAttribute(document.createAttribute('controls'));
    }
    element.onmouseenter=()=>{
        // element.firstElementChild.setAttributeNode(document.createAttribute('autoplay'));
        element.firstElementChild.setAttributeNode(document.createAttribute('controls'));
    }


});
function playVideo(){
    // ;
    
}
function stopVideo(e){
    // e.removeAttribute('autoplay');
}