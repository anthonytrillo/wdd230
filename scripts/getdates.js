const copyrightSymbol = '©';
const lastModifText = 'Last modification:';
const currentYear = new Date().getFullYear();
const date = document.querySelector('#date');
const lastModified = document.querySelector('#lastModified');
let lastModif = new Date(document.lastModified);

date.textContent = `${copyrightSymbol} ${currentYear}`;
lastModified.textContent = `${lastModifText} ${lastModif}`
