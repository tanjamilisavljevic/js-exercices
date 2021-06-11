const movies = [
    'Nomadland',
    'Drunk',
    'Wolfwalkers',
];

document.write('<ul>');
movies.forEach(movie => document.write(`<li>${movie}</li>`));
document.write('</ul>');
