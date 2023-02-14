let bold = document.querySelector('.bold');
let bold_font = document.querySelector('.bold i');


bold.addEventListener('click',function(){

    bold_font.classList.toggle("boldfont");
   document.querySelector('#my-textarea').classList.toggle("Font-bold");
})

/**********************************************ITALIC*************************************************/
let Italic = document.querySelector('.italic');
let Italic_font = document.querySelector('.italic i');

Italic.addEventListener('click',function(){
   document.querySelector('#my-textarea').classList.toggle("Font-italic");
})

/*********************************************UNDERLINE********************************************/
let underline = document.querySelector('.underline');
let underline_font = document.querySelector('.underline i');

underline.addEventListener('click',function(){
   document.querySelector('#my-textarea').classList.toggle("font-underline");
})

/***********************************Number Increase and Decrease**********************************/

let quantity = document.querySelector('#quantity');
let number = document.querySelector('.number');

function f1(e){
    let value = e.value;
    document.querySelector('#my-textarea').style.fontSize = value + "px";

}

/**************************************************ALIGN LEFT********************************/

let left = document.querySelector('.left');

left.addEventListener('click',function(){
   document.querySelector('#my-textarea').style.textAlign="left";
})

/****************************************************ALIGN-Center*****************************/
let center = document.querySelector('.middle');

center.addEventListener('click',function(){
   document.querySelector('#my-textarea').style.textAlign="center";
})

/**********************************************Align Right******************************** */
let right = document.querySelector('.right');

right.addEventListener('click',function(){
   document.querySelector('#my-textarea').style.textAlign="right";
})

/***************************************************UPPERCASE******************************/
let uppercase = document.querySelector('.uppercase');
uppercase.addEventListener('click',function(){
   document.querySelector('#my-textarea').style.textTransform="uppercase";
})

/***************************************************LOWERCASE******************************/
let lowercase = document.querySelector('.lowercase');
lowercase.addEventListener('click',function(){
   document.querySelector('#my-textarea').style.textTransform="lowercase";
})
/*****************************************************COLOR******************************* */

let color = document.querySelector('.color');

function f2(e){
   let value = e.value;
   document.querySelector('#my-textarea').style.color = value;

}
