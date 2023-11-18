/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Dea Angela Llamo";
let currentYear = "2023";
let profilePicture = "images/photo.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullName}`);



/* Step 5 - Array */
const favoriteFoods = ['Steak', 'Fried Chicken', 'Red Velvet Cheesecake', 'Salted Chocolate Cookie', 'Indian Mangoes with Shrimp Paste', 'Mashed Potato']
foodElement.innerHTML = favoriteFood;
const otherFood = ['Mac & Cheese'];
foodElement.push(otherFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`;









