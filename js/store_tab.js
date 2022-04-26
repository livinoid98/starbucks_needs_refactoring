const firstCoffeeTab = document.querySelector('.store_tab ul li');
const secondCoffeeTab = document.querySelector('.store_tab ul li:nth-child(2)');
const thirdCoffeeTab = document.querySelector('.store_tab ul li:nth-child(3)');
const fourthCoffeeTab = document.querySelector('.store_tab ul li:nth-child(4)');

const ON = "on"

firstCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.add(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
});

secondCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.add(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.remove(ON);
});

thirdCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.add(ON);
    fourthCoffeeTab.classList.remove(ON);
});

fourthCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
    fourthCoffeeTab.classList.add(ON);
});