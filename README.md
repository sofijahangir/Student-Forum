# Student Forum
The main purpose of this web application is to create a **tailor-made forum for students**. With a plethora of online forums, there doesn't exist a customized forum for students. Recognizing the importance of the educational forum, the intention is to create a forum that facilitates interactions and learnings outside the classroom.

  Application is live at [Frontend](https://student-forum-2020.herokuapp.com/home) and [Web Service](https://forum-webservice.herokuapp.com/).

## What are the framework & libraries used ?
This application is built using the following frameworks and libraries :package:.
* [Angular 7](https://angular.io/) - Web application framework
* [Bootstrap](https://getbootstrap.com/)  - CSS Framework
* [Google Fonts](https://fonts.google.com/) - Web Fonts Library
* [HTML and CSS](https://www.w3schools.com/html/)- Web designing Language
* [Sails JS](https://sailsjs.com/) - MVC Framework to build Web Services.
* [MongoDB](https://www.mongodb.com/) - NoSQL Database used for data storage.


## What are the prerequisite required ?
 * Node JS - [Install](https://nodejs.org/en/download/)
 * Angular 7 - [Install](https://angular.io/guide/setup-local)
 * Sails JS - [Install](https://sailsjs.com/get-started)

## How to run the application ?
1. Clone the repo to your local machine using `git clone https://github.com/sharmila-t/Student-Forum.git`
2. Navigate to the workspace folder using `cd student-forum`

### Front End
3. Navigate to front workspace using `cd Frontend`
4. Launch the app using `ng serve --open`
5. Now the application will open in your default browser in following URL [localhost:4200](http:\\localhost:4200\home).

### Back End
6. Navigate to front workspace using `cd Backend\app`
7. Run the server by using `sails lift`
8. Now the server will be up in following URL [localhost:1337](http:\\localhost:1337).

**Note** The above steps will succeed only if the prerequisite platforms are installed in your local machine.

## What you can expect to see in here ?
The following are the pages that I've developed as the part of the student forum application

1. [Login](https://student-forum-2020.herokuapp.com/login) - This page allows the user (both professor & student) to sign into the application. Session Management is done by maintaining  'sid' between client and server.
2. [Signup](https://student-forum-2020.herokuapp.com/signup) - This page allows the user to signup for the application. Once the user has signed-in, he/she will be logged in and the session will also be created simultaneously.
3. [Reset](https://student-forum-2020.herokuapp.com/reset) - This page allow the user to reset the password if they've forgotten the password.
4. Logout - An option to logout and reset the user session.
5. [add Post](https://student-forum-2020.herokuapp.com/discussions/add) - This page allows the user to create a new post for a particular subject.
6. [discussion list](https://student-forum-2020.herokuapp.com/discussions) - This page list the discussions of the subject the user is registered to. It allows the user to give different types of filter (discussion of particular course, active discussion, archived discussion, etc)
7. [Comments] This feature allows users to view comments
8. [Create comments] This feature allows users to create comments.
9. [Add Course](https://student-forum-2020.herokuapp.com/course/add) - This page, allows the users to add the courses for having discussions. Initially, the user will fill in the add course form on this page and then the course will be added. After adding the course, the course along with its details will be stored in the database.
10. [Browse Course](https://student-forum-2020.herokuapp.com/course/browse) - This page will render the courses stored in the database. The user can search and get enrolled into courses on this page.


## Application tour :rocket:
Now let us go for around to visit the above pages.

### User Management
* The application by default will open the *landing page* when served :checkered_flag: . Here we have a welcome section, customer review section and a feature display section.
* Now to go into the application, you'll have to click on the *login menu* in the top navbar :checkered_flag: .
* Ahanha...! You can't just sneak into the application. So give a proper email-id and password.
* If you haven't signed-up click on the *register* option right below the login button :checkered_flag:.
* If you forgotten your password, don't worry just reset it by using the *reset password* option below the login button :checkered_flag:.
* On successful login you will be taken to *dashboard* page of the application :checkered_flag: .
* Now you can find *logout* option in top menu bar :checkered_flag:.

### Dashboard


### Discussion Management
* This feature requires the user to be logged in to the website.
* After, logging in the user must navigate to discussion from the right-hand side navigation bar. From here the user can click on “+” symbol to add a new post :checkered_flag:.
* You will be asked enter the respective information (like title, course, content).
* After submitting the post, the user will then be routed to the discussion list page :checkered_flag:, where the user can see the entry posted by him.

### Course Management
*  In order to access this feature of the application, you must be logged in.
*  After successful login, the add course page can be accessed by clicking on the add course button which is available in the side Nav bar while you are on the Dashboard or you can click [here](https://student-forum-2020.herokuapp.com/course/add) :checkered_flag:.
*  You will be asked enter the respective information (like course name, duration, course code).
*  After adding the course, you will be redirected to the course list page :checkered_flag: where you can see the added list of courses.

### Comments Under Post
* You have to login and go to discussions and then click on continue reading to view the full content of the post.
* Once there you can post a comment either by identifying yourself or anonymously.


## Design Credits :art:

#### Inspirations
* Landing Page - [Moz](https://instapage.com/blog/landing-page-examples)
* Dashboard - [Bootstrap Theme](https://getbootstrap.com/docs/4.1/examples/dashboard/#)
* Login - [Bootstrap Templates](https://freshdesignweb.com/css-login-form-templates/)

#### Image Credits

* Landing page students image - [KissPNG](https://www.kisspng.com/png-international-student-scholarship-university-colle-442497/)
* Profile Picture - [Tumblr](https://www.tumblr.com/search/chandler%20icons%20season%202)

#### Tools

* Logo Generator - [Hatchful](https://hatchful.shopify.com/)
* Image Editing - [Pixlr](https://pixlr.com/x/)
* Code Editor - [Atom](https://atom.io/)
* Versioning - [Gitlab](https://git.cs.dal.ca/sharmila/A2_Sharmila_Thirumalainathan)

## References

1. A free tutorial to learn HTML and CSS. (n.d.). Retrieved from https://marksheet.io/sass-scss-less.html
2. Angular Getting Started Tutorial. (n.d.). Retrieved May 30, 2019, from https://angular.io/tutorial
3. Futur, T. (2015, August 12). What is UX Design? Defining User Experience Design & Explaining the Process. Retrieved from https://www.youtube.com/watch?v=CJnfAXlBRTE
4. Holeczek, Ł. (n.d.). Bootstrap cards. Retrieved from https://coreui.io/docs/components/cards/
5. The Most Important Color In UI Design. (2017, November 03). Retrieved from https://blog.marvelapp.com/important-color-ui-design/
6. Wanyoike, M. (2018, October 25). History of front-end frameworks. Retrieved from https://logrocket.com/blog/history-of-frontend-frameworks/
7. Hesp, G. (2019). Implement Passport.js authentication with Sails.js 1.0. [online] Medium. Available at: https://medium.com/@greg.hesp/implement-passport-js-authentication-with-sails-js-1-0-50888265fb83 [Accessed 17 Jul. 2019].
8. Angular Bootstrap. (n.d.). Retrieved July 10, 2019, from https://valor-software.com/ngx-bootstrap/#/datepicker

## Author
- Sharmila Thirumalainathan

## Contributors
- Jesuseyi Will Fasuyi
- Nirav Solanki
- Nishant Bhambhani
