

const backGreen = document.getElementById("bg");

backGreen.onclick = function(){
    
  event.target.style.background = "green";
    
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////



const togButton = document.querySelector(".toggler");

const toggBag = document.querySelector(".togglee")

togButton.onclick = function () {
    
    console.log(event.target);

    toggBag.classList.toggle("extra");
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////




const dropdown = document.querySelector("select");
const parCount = document.querySelector(".paragraphs-container");

dropdown.onchange = function () {
    

    const selectedValue = this.value;

    parCount.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        parCount.innerHTML += `<p class="content"></p>`;
    }
};







////////////////////////////////////////////////////////////////////////////////////////////////////////////




const inpText = document.querySelector(".input");
const textCounter = document.querySelector(".char-count b");

inpText.onkeyup = function () {
    console.log(event.target.value.length);

    const textLength = event.target.value.length;

    textCounter.innerHTML = textLength;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////






function scroll () {

    const scrolling = window.scrollY;

    if(scrolling > 35) {
        document.body.classList.add('highlight');
    } else {
        document.body.classList.remove('highlight');
    }
}

window.onscroll = scroll;






