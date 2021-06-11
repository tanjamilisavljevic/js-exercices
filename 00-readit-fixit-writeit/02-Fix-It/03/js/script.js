const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const reverseTvshows = tvshows.concat().reverse();
document.write(`<ol>`);
for (let i = 0; i < reverseTvshows.length; i++) {
  document.write(`<li>${reverseTvshows[i]}</li>`);
}
document.write(`</ol>`);
