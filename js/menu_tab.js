const firstCoffeeTab = document.querySelector('.menu_tab ul li');
const secondCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(2)');
const thirdCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(3)');
const fourthCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(4)');
const fifthCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(5)');
const sixthCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(6)');
const seventhCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(7)');
const eigthCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(8)');
const ninthCoffeeTab = document.querySelector('.menu_tab ul li:nth-child(9)');

const ON = "on"

firstCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.add(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

secondCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.add(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

thirdCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.add(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

fourthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.add(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

fifthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.add(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

sixthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.add(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

seventhCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.add(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.remove(ON);
});

eigthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.add(ON);
    ninthCoffeeTab.classList.remove(ON);
});

ninthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
    sixthCoffeeTab.classList.remove(ON);
    seventhCoffeeTab.classList.remove(ON);
    eigthCoffeeTab.classList.remove(ON);
    ninthCoffeeTab.classList.add(ON);
});