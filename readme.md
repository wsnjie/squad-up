Overview
============
Project two is an app called SquadApp! that you can use to make a personal sechdule for a multi-day event. You can also compare that schdeule to a friend's and see if you have any common events that you are both planning to attend.

Link to Heroku deployment: [Here!](https://evening-island-86988.herokuapp.com/)



Technologies
==============
- HTML5, CSS3, Javascript, jQuery
- MongoDB
- Express
- Handlebars (view engine)
- Node.js
- Design: [Bulma](https://bulma.io/documentation/overview/start/)
- [Trello](https://trello.com/b/YAPVVkuy/project-2) for planing and stories

Attribution
===========
- Background image from Unsplash and was made by [Donny Howe](https://unsplash.com/photos/bn-D2bCvpik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

- Each click for 'Add' and 'Delete from the edit view redirects back to the same page, to handle returning to the same scroll position, I used a code snippet from [stack overflow](https://stackoverflow.com/questions/34261365/retain-scrollbar-position-even-after-reloading-using-javascript) that saves the scroll position as you scroll down the page to a varible and then when the page reloads, it uses that value to determine where the page should be. 

Features
===========
* CRUD
    * Create - from the create form, a user can create both a new user account and schedule at the same time.
    * Read - Index list of all users is the homepage. There is an individual show page for each user's schedule that lists all events they have added to their schedule. The user could reference this page during an event to keep up with which show they plan to see next.
    * Update and Delete - From the edit form, the entire schedule for each day of the event is rendered. If the event is already on that user's schdeule, they have the option to remove it from their schdule. If the event is not on their schedule, they have the option to add it.




Wireframe
=============
![Inital Whiteboard](/public/assets/data-model.png)

This particular whiteboard was very rudimentary, but the basic design and functionalty remained the same throughout the project and this drawing did inform the design of the game.

Future Devlopment
============
* User authenication 
* Abitlity to add users as friends
* Ability to share schedules on social media