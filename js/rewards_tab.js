const firstCoffeeTab = document.querySelector('.rewards_tab ul li');
const secondCoffeeTab = document.querySelector('.rewards_tab ul li:nth-child(2)');
const thirdCoffeeTab = document.querySelector('.rewards_tab ul li:nth-child(3)');

const ON = "on"

firstCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.add(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.remove(ON);
});

secondCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.add(ON);
    thirdCoffeeTab.classList.remove(ON);
});

thirdCoffeeTab.addEventListener('click', function(){
    firstCoffeeTab.classList.remove(ON);
    secondCoffeeTab.classList.remove(ON);
    thirdCoffeeTab.classList.add(ON);
});