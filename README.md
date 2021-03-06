![](https://img.shields.io/badge/Microverse-blueviolet) ![](https://img.shields.io/badge/JavaScript-yellow)

# TO DO LIST

This project features:

- Use webpack to bundle JavaScript.
- Learn how to use proper ES6 syntax.
- Use ES6 modules to write modular JavaScript.
- Set up a new project with webpack that is based on the webpack exercise you have already completed.
- Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (<div> or <ul> element). - The index.html file must be set as a template using the HTML Webpack Plugin.
- Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
1.description [string].
2.completed [bool].
3.index: [number].
- Write a function to iterate over the tasks array and populate an HTML list item element for each task.
- On page load render the dynamically created list of tasks in the dedicated placeholder. The list should apear in order of the index values for each task.
- Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.
- Add a new JavaScript files and import it as a module:
1. it will contain methods related to the status updates (completed: true / false).
- Add event listener to the checkbox (change).
- Update items object's value for completed key upon user actions.
- Store the updated array of items in local storage, so the user gets the correct list values after the page reloads.
- Delete one single task from panel and local storage, or clean all the panel and localStorage. 

## Built With

- Html, CSS, and JavaScript;
- Git and GitHub.

<!-- ## Screenshots

![screenshot](./assets/imgs/screenshot2.png)
![screenshot](./assets/imgs/screenshot3.png)
![screenshot](./assets/imgs/screenshot4.png) -->

## Live Demo
[To do list](https://anapdh.github.io/todo-list/dist/index.html)

## Prerequisites

- Node.js

## Getting Started

To get a local copy up and run the project, follow these simple example steps:

### Install

You can download the code to your personal computer cloning the repository using the following command:

```
git clone https://github.com/anapdh/todo-app.git
```

After cloning the repository and opening it in your code editor, run the following code in the terminal:

```
npm install
```

### Run

Run the application by typing `npm run start` or by launching your local webserver after bundle: http://localhost:8080/.

## Authors

??????????????? **Ana Paula H??bner**

- GitHub: [@anapdh](https://github.com/anapdh)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/anapdh)
- Twitter: [@dev_anahub](https://twitter.com/dev_anahub)

## ???? Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/anapdh/todo-list/issues).

## Show your support

Give a ?????? if you like this project!

## ???? License

This project is [MIT](https://github.com/anapdh/todo-list/blob/develop/LICENSE.md) licensed.