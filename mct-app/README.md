-------------------------- USER CARD MCT PROJECT ------------------------------

Hi, In this project I used concepts like--

1. ContextAPI
2. UseState
3. UseEffect
4. Axios
5. json-server

-------COMPONENTS Explanation-------------------

1. index.js --> Entry point
2. App.js --> Wrapper for all components
3. Home.jsx --> This will render intial view of UI. In this file Card component will called for   
   multiple users using map function.
4. Card.jsx --> This component is responsible for all the events like
        - like button --> I used useState for this to manage variable things.
        - edit button --> For this button I used json-server PUT method to update db.json file.
        - delete button --> Delete card using given id of target.
        - Avatar creation using username


------DATABASE-------------------------

* db.json --> I created this using json-server libarary
intiallly I used localhost json-server but this is not work on hosting.
So, I deployed and host db.json file on -- 'render cloud platform' 
link --> https://mydata-fb7x.onrender.com/users  <-- This is my server
 

------- Project Host-----------

Netlify -- > https://mct-react-project.netlify.app/
Github --> https://github.com/MohdSaqib7/ReactAssignments/tree/main/mct-app







                 