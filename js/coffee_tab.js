const firstCoffeeTab = document.querySelector('.coffee_tab ul li');
const secondCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(2)');
const thirdCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(3)');
const fourthCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(4)');
const fifthCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(5)');

const ON = "on"

firstCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.add(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
});

secondCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.add(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
});

thirdCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.add(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.remove(ON);
});

fourthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.add(ON);
    fifthCoffeeTab.classList.remove(ON);
});

fifthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
    fifthCoffeeTab.classList.add(ON);
});