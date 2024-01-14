user Authentication front end:

* created an React application using Vite for faster aplication Built
* created an folder naming  containing components for login and Creating user
* In application created routes for login and create component
  
API Confic:
* created an Axios that stores API URL globally where we can access it any where in our project
  
Functionalities used in Login Component:
* API end point is mentioned in .env file
* By calling api creating an POST request  and fetching the generated token (Which is generated while creating Createrial passes in backend)
* And the feched token is stored in authorization in headers

Functionalities used in crete component:
* This component enables in creating new users for adding in oru DB
* used react formic rather than useState() for better state management this minimises oru application rendering and easy validation of our form data
* imported toast for displaying error messages
* calling an API end point and posting the new users data in DB
* After clearing all specified validation

  
  
