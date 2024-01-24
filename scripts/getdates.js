const copyrightSymbol = '©';
const lastModifText = 'Last modification:';
const currentYear = new Date().getFullYear();
const date = document.querySelector('#date');
const lastModified = document.querySelector('#lastModified');
let lastModif = new Date(document.lastModified);
let dateOnly = lastModif.toLocaleDateString();
let timeOnly = lastModif.toLocaleTimeString();


date.textContent = `${copyrightSymbol} ${currentYear}`;
lastModified.textContent = `${lastModifText} ${dateOnly} ${timeOnly}`;
