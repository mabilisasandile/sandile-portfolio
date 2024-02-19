import project1 from '../assets/images/img6.jpg';
import project2 from '../assets/images/img7.jpg';
import project3 from '../assets/images/img3.jpg';

let hotelAppInfo = "The objective of the task was to build an interactive React application with CRUD operations that integrate with Firebase. ";
hotelAppInfo += " The web application takes the form of two separate applications, one for admin and one for the client/customer. This will be the first task that involves real time communication between connected apps. ";
hotelAppInfo += " Admin App Objective: The admin app allows an admin to add and maintain rooms in a hotel. The admin should be able to add new rooms with all information required, update the room later or delete it fully. The admin should be able to view all the rooms and room types already added. ";
hotelAppInfo += " Client App Objective: The client app allows users to register, login, browse the rooms the hotel has and then book when interested. Users should be able to filter these rooms according to a price range provided by the user. The web app should allow users to select a date range for their visit, and only allow booking if there is a room available for those days. ";
hotelAppInfo += "Tools used: Javascript, React, CSS, Bootstrap, and Firebase for data storage and hosting.";

let weatherAppInfo = "The objective of this task was to help gauge my understanding of APIs and how to manipulate app data using APIs as my source of information. ";
weatherAppInfo += "I are created a weather app that shows the weather forecast of the location the user is in or searching. It also shows real-time news in and around that area/location. ";
weatherAppInfo += "Tools used: Javascript, React, CSS, and Firebase for hosting.";

let toDoListAppInfo = "The objective of this task was to create a todo list (task list or task planner) that allows users to add a list of tasks that have three different priority levels (High, Medium and Low)";
toDoListAppInfo += "The app has three main pages, namely: Registration, Login and Home page.";
toDoListAppInfo += "The requirements of the app are as follows: ";
toDoListAppInfo += "1. New users should be able to register on the app ";
toDoListAppInfo += "2. Registered users should be able to login ";
toDoListAppInfo += "3. Should be able to add new task with task description, and priority of the task ";
toDoListAppInfo += "4. Should be able to update, delete and search existing tasks ";
toDoListAppInfo += "5. Home page should be accessable when logged in, this called a guarded route 6. Data should be persistent. ";
toDoListAppInfo += "Tools used: Javascript, React, CSS, Local Storage, and Firebase for hosting. ";

let empManagementAppInfo = " The objective of this task was to build a full stack (frontend and backend) project for managing employees. " ;
empManagementAppInfo += "It integrates Node.js, Express, EJS and Firebase Admin. ";
empManagementAppInfo += " The requirements of the app are as follows: ";
empManagementAppInfo += " 1. Build a server running on Node.js. That will contain both the backend as well as frontend. The backend should manage routing and the logic of the app in terms ofdata management. ";
empManagementAppInfo += "2. The endpoints should have Firebase Firestore code within their logic to handle user requests, and to force any necessary redirects to other pages when bad urls are requested.  ";
empManagementAppInfo += " 3. For the views, set up pages that will allow you to: a. Add new employees b. View all existing employees (brief view) c. View a single employee (detailed view) d. Update existing employees e. Delete existing employees ";

let shoppingListAppInfo = "The objective of this task was to help me understand Redux, which is the default tool used in complex projects to manage and share state between components as compared to prop drilling and context. ";
shoppingListAppInfo += " The requirements of the app are as follows: ";
shoppingListAppInfo += "  1. Design a user-friendly interface that allows users to manage their shopping list efficiently. Include pages that allow users to: a. Add new items to the list b. Display the already added items c. Edit existing items on the shopping list d. Delete existing items from the list ";
shoppingListAppInfo += "  2. Firebase should be used as the database, so all edits that happen should be persistent and available on every app reload. ";
shoppingListAppInfo += "  3. Redux should be used for state management within the project: a. Set up a Redux store, reducers and actions to manage your data. b. All data from firebase will be stored on the redux store then accessed from the app’s components using Redux actions/reducers. ";
shoppingListAppInfo += " Tools used: Javascript, React, Redux, Firebase for storing data and hosting";

let restaurantAppInfo = "This task aimed to help me showcase my working knowledge of React Native in the form of a mobile application that allows the user to view food menus and make orders through the application. ";
restaurantAppInfo += "  The requirements of the app are as follows: ";
restaurantAppInfo += " Create an application that: a. Allows users to be able to register, login and update their profiles on the application. b. Views food menus c. View a food item d. Add items to cart e. View cart f. Remove items from the cart g. Clears the cart h. Goes to checkout i. Places an order";
restaurantAppInfo += " Tools used: React Native, Javascript, NodeJS, Stripe for payment integration, Expo for hosting, and Firebase for data storage. ";
restaurantAppInfo += "\n To explore the app on android Expo Go app use the link: exp://u.expo.dev/update/7705a239-c4f3-497c-99b3-55bcb5628daf"

const ProjectCardData = [
    {
        imgsrc: project1,
        title: "Hotel App",
        text: hotelAppInfo,
        view: "https://hotel-bookings-app.web.app/",
        gitlink: "https://github.com/mabilisasandile/hotel-booking-app"
    },
    {
        imgsrc: project2,
        title: "Weather App",
        text: weatherAppInfo,
        view: "https://weather-app-f5c30.web.app",
        gitlink: "https://github.com/mabilisasandile/weather-app"
    },
    {
        imgsrc: project3,
        title: "To-Do List App",
        text: toDoListAppInfo,
        view: "https://to-do-list-592d8.web.app/",
        gitlink: "https://github.com/mabilisasandile/To_Do_List"
    },
    {
        imgsrc: project2,
        title: "Employee Management App",
        text: empManagementAppInfo,
        view: './contact',
        gitlink: "https://github.com/mabilisasandile/employee-management-app"
    },
    {
        imgsrc: project1,
        title: "Shopping List App",
        text: shoppingListAppInfo,
        view: "https://shopping-list-app-cf813.web.app",
        gitlink: "https://github.com/mabilisasandile/shopping-list-app"
    },
    {
        imgsrc: project3,
        title: "Restaurant App",
        text: restaurantAppInfo,
        view: './contact',
        gitlink: "https://github.com/mabilisasandile/Restaurant-App"
    }


]

export default ProjectCardData;