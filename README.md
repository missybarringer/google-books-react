# Google Books Search

## Contributors
@missybarringer
____________________________________
## Technologies Used
* React - includes Webpack & Babel
* Javascript ES6
* Node.js
* Express.js
* HTML5
* Bootstrap
* CSS
** dependencies
    * axios
    * express
    * if-env
    * mongoose
    * react
    * react-dom
    * react-router-dom
    * react-scripts
* MongoDB database
____________________________________
## Links
* [Click here to View the Google Search App in action](https://google-books-react-vbc.herokuapp.com/)
* [GitHub Repository Link](https://github.com/missybarringer/google-books-react.git)
![alt text](./screenshots/GoogleBookSearch.PNG)
* Saved Page
![alt text](./screenshots/GoogleBookSearchSaved.PNG)
____________________________________
## Overview
React Google Books Search using the Google Books API and create-react-app.
____________________________________
## Problem
Users need a way to search Google Books with the option of saving those books that they are interested in for later viewing
____________________________________
## Solution
Created a React application that performs CRUD (create, read, update-not needed, & delete) operations using a Mongo database.
____________________________________
## Technical specifications
This application demonstrates a full stack application using the MVC model (Model–View–Controller). HTML/CSS and React were used for the front end of the application. The backend of the application was implemented with Node, Express, and MongoDB for the database. The application's UI was built using React components, React lifecycle methods were used to query & display books from the Google books API based on their searches. On the search page, the user can click a "View" button to view the book on Google books, or they can click a "Save" button to save it to the Mongo database. On the Saved page, the user can see all of the current "Saved" books from the Mongo database. They can view the book on Google books from here or they can delete it from the Mongo database.

Mongoose was used to connect to the MongoDB database and for creating the Book schema. See schema & file structure diagram below:
![alt text](./screenshots/homework-20.png)
____________________________________
#### Picture Contributors
* Book Sign Photo by César Viteri on Unsplash
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* e-mail: barringer.margaret@gmail.com
* Twitter: @webwabisabi_com
* Instagram: @webwabisabi_com
* [Website](http://www.WebWabiSabi.com)
