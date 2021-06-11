# READ IT
## EX 02
* Open index.html in your browser. What is the difference between this and the previous example?
* Do you notice a difference between the 2 document.write lines?
* Look at the 'Template literals' documentation

Answer:
Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).

In ES6, you create a template literal by wrapping your text in backticks (`) as follows:

let simple = `This is a template literal`;
Code language: JavaScript (javascript)

and you get the following features:

    A multiline string: a string that can span multiple lines.
    String formatting: the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
    HTML escaping: the ability to transform a string so that it is safe to include in HTML.

    If a string contains a backtick, you must escape it using a backslash ( \)