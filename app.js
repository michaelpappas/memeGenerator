"use strict"
//establishes button constant set to submit button
const form = document.querySelector("form");
// stores image url input field as imgURL
let imgURL = document.querySelector('input[name="imgURL"]');
// stores topText input field as topText
let topText = document.querySelector('input[name="top-text"]');
// stores topText input field as topText
let bottomText = document.querySelector('input[name="bottom-text"]');

// const body = document.querySelector('body');
const results = document.querySelector('section');
// const div = document.querySelector('div');

let count = 1;
form.addEventListener("submit", function(event){
  event.preventDefault();
  const top = addH2(topText.value);
  const bottom = addH2(bottomText.value);
  const newDiv = document.createElement('div');
  newDiv.style.width = 600+'px';
  const img = addImage(imgURL.value);
  top.style.top = 0+'px';
  bottom.style.bottom = 20+'px';
  newDiv.className = 'meme';
  let tempId = "meme"+count;
  newDiv.id = tempId;
  newDiv.append(img);
  newDiv.append(top);
  newDiv.append(bottom);
  results.append(newDiv);
  newDiv.addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentElement)
    e.target.parentElement.remove();
  })
  clearInputs();
})

// let memes =document.getElementsByClassName('meme');
// memes[0].addEventListener('click', function(e){
//   let div = e.target;
//   div.addEventListener();
// });


function clearInputs(){
  topText.value = '';
  bottomText.value = '';
  imgURL.value = '';
}
function addH2(text){
  const h2 = document.createElement('h2');
  h2.innerText = text;
  return h2
}

function addImage(url){
  const img = document.createElement('img');
  img.src=url;
  img.style.width = 600+'px';
  return img
}


// memes.addEventListener('click', function(e){
//   let div = e.target;
//   div.delete();
// })