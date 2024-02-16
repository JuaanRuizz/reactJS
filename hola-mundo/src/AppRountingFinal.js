import { BrowserRouter as Router, Route, Routes, Link, Switch, Redirect} from 'react-router-dom';
// import HomePage from './pages/home/homePage.jsx';
// import AboutPage from './pages/about-faqs/AboutPage.jsx';
import NotFoundPage from './pages/404/notFoundPage.jsx';
// import Profile from './pages/Profile/profile.jsx';
// import TaskPage from './pages/Task/taskPage.jsx';
// import TaskDetailPage from './pages/Task/TaskDetailPage.jsx';
import LogginPage from './pages/auth/logginPage.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';

function AppRoutingFinal() {

// TO_DO: Change to value from sessionStorage.
  let loggedIn = true;
  
  return (
    
      <Router>
          {/* Route Switch */}
          <Switch>
            {/* Redirections tu protect our routes */}
            <Route exact path='/'>
              {
                loggedIn ? 
                (<Redirect from='/' to='/dashboard'></Redirect>)
                :
                (<Redirect from='/' to='login'></Redirect>)
              }
            </Route>
            {/* Login Route */}
            <Route exact path='/login' component={LogginPage}></Route>
            {/* Dashboard Route */}
            <Route exact path='/dashboard'>
              {
                loggedIn ? 
                (<Dashboard></Dashboard>)
                :
                (<Redirect from='/' to='login'></Redirect>)
              }
              </Route>
            <Route component = {NotFoundPage}></Route>
          </Switch>
        </Router>

  );
}

export default AppRoutingFinal;