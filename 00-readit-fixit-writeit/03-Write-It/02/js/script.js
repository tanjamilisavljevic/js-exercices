const movies = [
    'Nomadland',
    'Drunk',
    'Wolfwalkers',
];

const parseTitle = title => {
    const lowerTitle = title.toLowerCase();
    document.write(lowerTitle);
}

document.write('<ul>');
movies.forEach(movie => parseTitle(`<li>${movie}</li>`));
document.write('</ul>');
