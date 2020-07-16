Treehouse Unit 10 Project

The api file houses the api I created for my Treehouse unit 9 project and the client folder holds the react-app that links to the api and returns a react page for a website where users can either view the courses in the database or sign up or sign in to create a course. 

Authorized users can update and delete only the courses that they added. The buttons for these are only visible when a user is viewing their own course and the browser is rerouted to forbidden or notfound if it is manually typed into the url. Only authorized users can add a course to the database.

Users do not need to authorized to view the list of courses or their detail page.

The details page uses react markdown to render the description and the list of materials needed. A javascript function ensures that data is processed in the correct format for react markdown.

Validation errors guides user to enter the correct information to be added to the database in the create and update course route as well as the user sign up route. 

There is a notfound, error and forbidden route for error handling and switch catches any routes not found.

To run this project locally, please run npm start in the command line for the api file and then in a separate terminal npm start for the client file. 
The api runs on localhost:5000 and the client runs on localhost:3000.

