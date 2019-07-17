# Student Forum
The main purpose of this web application is to create a **tailor-made forum for students**. With a plethora of online forums, there doesn't exist a customized forum for students. Recognizing the importance of the educational forum, the intention is to create a forum that facilitates interactions and learnings outside the classroom.

  Application is live [here!!](https://student-forum-2019.herokuapp.com/home)

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
1. Clone the repo to your local machine using `git clone https://git.cs.dal.ca/sharmila/A2_Sharmila_Thirumalainathan.git`
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

1. [Landing page](https://student-forum-2019.herokuapp.com/home) - This the first page that a user will visit which can also be called as Destination Page.
2. [Login](https://student-forum-2019.herokuapp.com/login) - This page allows the user (both professor & student) to sign into the application.
3. [Dashboard](https://student-forum-2019.herokuapp.com/dashboard) - Dashboard is similar to a control panel which is the initial page of this application. From here the student can navigate to any desired page.
4. [Discussion List Page](https://student-forum-2019.herokuapp.com/discussions) - It lists all the posts which has posted in the enrolled course group.
5. [Discussion Details page](https://student-forum-2019.herokuapp.com/discussions/details) - Discussion thread view
6. [Discussion post page](https://student-forum-2019.herokuapp.com/discussions/add)
7. [Course Add page](https://student-forum-2019.herokuapp.com/course/add)
8. [Browse Course](https://student-forum-2019.herokuapp.com/course/browse?keyword=csc)

## Application tour :rocket:
Now let us go for around to visit the above pages.

* The application by default will open the *landing page* when served :checkered_flag: . Here we have a welcome section, customer review section and a feature display section.
* Now to go into the application, you'll have to click on the *login menu* in the top navbar :checkered_flag: .
* Ahanha...! You can't just sneak into the application. So give a proper email-id and a dummy password.
* Now we are here in the *dashboard* page of the application :checkered_flag: .
* You can get an overall view about what are the features and how it is implemented in this application by seeing this page. I think the blue button in the sidebar prominently caught your see. If it is so, then I have succeeded in my motive to place it there. That is a quick create button placed there to make the user task easier. It will change according to the page.
* Here we are at the final phase, we have one more page to visit. I think you can see the discussion menu in the sidebar, click on that to visit the *discussion list* page :checkered_flag: .
* In discussions page we have all the post displayed in a list view. Here we have some filter and sorting option.

So that's it for this episode. I know you are excited to see the completed version of this. Have a Coffee and come back to our project review to examine the application with a lot more enhancement.

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

## Other references

1. A free tutorial to learn HTML and CSS. (n.d.). Retrieved from https://marksheet.io/sass-scss-less.html
2. Angular Getting Started Tutorial. (n.d.). Retrieved May 30, 2019, from https://angular.io/tutorial
3. Futur, T. (2015, August 12). What is UX Design? Defining User Experience Design & Explaining the Process. Retrieved from https://www.youtube.com/watch?v=CJnfAXlBRTE
4. Holeczek, Ł. (n.d.). Bootstrap cards. Retrieved from https://coreui.io/docs/components/cards/
5. The Most Important Color In UI Design. (2017, November 03). Retrieved from https://blog.marvelapp.com/important-color-ui-design/
6. Wanyoike, M. (2018, October 25). History of front-end frameworks. Retrieved from https://logrocket.com/blog/history-of-frontend-frameworks/

## Author
- Sharmila Thirumalainathan, *B00823668*.
