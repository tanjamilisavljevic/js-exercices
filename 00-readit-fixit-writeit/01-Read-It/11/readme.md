# READ IT
## EX 11
* What's the difference with the previous exercises? What are we dealing with here?
* Where exactly do we define to only render the title

Answer:
Now we have an array of objects with 3 properties each.

This piece of code creates a list with just the titles and it makes the titles lowercase: 
const createList = movies => {
  return `
    <ol>${movies
    .map(movie => movie.title.toLowerCase())
    .map(title => wrapWithTag(title, `li`))
    .join(``)}
    </ol>`;
};