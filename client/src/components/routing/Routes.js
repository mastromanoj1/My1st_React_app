  
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/register.js';
import Login from '../auth/login.js';
import Profile from '../post/profile';
import Contact from '../post/contact';
import Postpage from '../template/postpage.js';



// import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';
// import ProfileForm from '../profile-forms/ProfileForm';
// import AddExperience from '../profile-forms/AddExperience';
// import AddEducation from '../profile-forms/AddEducation';
// import Profiles from '../profiles/Profiles';
// import Profile from '../profile/Profile';
// import Posts from '../posts/Posts';
// import Post from '../post/Post';
// import NotFound from '../layout/NotFound';
// import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
      
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path = "/profile" component = {Profile}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = '/category/:postcollection/:id' component = {Postpage}/>

        {/* <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} /> */}
      </Switch>
    
  );
};

export default Routes;