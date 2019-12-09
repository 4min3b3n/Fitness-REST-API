import { 
    addNewUser, getUsers, getUser, updateUser, deleteUser, // CRUD Methods on User Entity
    loginUser, logoutUser, logoutAllUser, profileUser
} from "../controllers/userController";

const userRoutes = (app) => {

    app.route('/users')
    .get(getUsers)              // HTTP GET      /users         Get all users
    .post(addNewUser);          // HTTP POST     /users         Register a new user

    app.route('/users/:userID')
    .get(getUser)               // HTTP GET     /users/userID   Retrieve user by userID  
    .put(updateUser)            // HTTP PUT     /users/userID   Update user informations 
    .delete(deleteUser);        // HTTP DELETE  /users/userID   Remove user

    app.route('/users/auth/login')
    .post(loginUser);            // HTTP POST    /users/login    Allow user to login

    app.route('/users/auth/me')
    .get(profileUser);          // HTTP GET     /users/me       Retrieve current user informations

    app.route('/users/auth/logout')
    .post(logoutUser);          // HTTP POST    /users/logout   Logout the user
    
    
    app.route('/users/auth/logoutall')
    .post(logoutAllUser);       // HTTP POST /users/logoutall   Logout the user from all the devices.

}

export default userRoutes;