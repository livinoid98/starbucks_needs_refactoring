const firstCoffeeTab = document.querySelector('.coffee_tab ul li');
const secondCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(2)');
const thirdCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(3)');
const fourthCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(4)');
const fifthCoffeeTab = document.querySelector('.coffee_tab ul li:nth-child(5)');

firstCoffeeTab.addEventListener('click', function(){
    alert('first');
});

secondCoffeeTab.addEventListener('click', function(){
    alert('second');
});

thirdCoffeeTab.addEventListener('click', function(){
    alert('third');
});

fourthCoffeeTab.addEventListener('click', function(){
    alert('fourth');
});

fifthCoffeeTab.addEventListener('click', function(){
    alert('fifth');
});