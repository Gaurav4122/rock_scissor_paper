"use strict"
var index=0;
var indexs=0;
const arr = ['rock','scissor','paper'];

//Basically here some properties used on the personn and computer
const first_box  = document.getElementById('select1');
const second_box = document.getElementById('select2');

first_box.style.fontSize = '25px'
first_box.style.textAlign = 'center'
first_box.style.marginTop = '30px'

second_box.style.fontSize = '25px'
second_box.style.textAlign = 'center'
second_box.style.marginTop = '30px'

// These two variable store the random value

// This generate the first random vaule
const box = document.querySelector('#first');

const answer = document.getElementById('result')

box.addEventListener('click',(event)=>{
    const first_person = document.getElementById('select1');
    
    index = Math.floor(Math.random()*arr.length);
    console.log(index);
    first_person.innerHTML = arr[index];

    indexs = Math.floor(Math.random()*arr.length);
    console.log(indexs);
    const second_person = document.getElementById('select2');
    second_person.innerHTML = arr[indexs];


    // useRandomValues();

    if((arr[index]==='scissor') && (arr[indexs]==='paper')){
        answer.innerHTML='Person winner'
    }

    if((arr[index]==='rock') && (arr[indexs]==='paper')){
        answer.innerHTML='person winner'
    }

    if((arr[index]==='scissor') && (arr[indexs]==='rock')){
        answer.innerHTML='computer winner'
    }
    
    if((arr[index]==='paper') && (arr[indexs]==='rock')){
        answer.innerHTML='computer winner'
    }

    if((arr[index]==='paper') && (arr[indexs]==='scissor')){
        answer.innerHTML='computer winner'
    }




    if((arr[index]==='paper') && (arr[indexs]==='paper')){
        answer.innerHTML='Draw'
    }

    if((arr[index]==='scissor') && (arr[indexs]==='scissor')){
        answer.innerHTML='Draw'
    }

    if((arr[index]==='rock') && (arr[indexs]==='rock')){
        answer.innerHTML='Draw'
    }
    
    
    
})
