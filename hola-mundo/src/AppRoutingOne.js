import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about-faqs/AboutPage.jsx';
import NotFoundPage from './pages/404/notFoundPage.jsx';
import Profile from './pages/Profile/profile.jsx';
import TaskPage from './pages/Task/taskPage.jsx';
import TaskDetailPage from './pages/Task/TaskDetailPage.jsx';
import LogginPage from './pages/auth/logginPage.jsx';

function AppRoutingOne() {
  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'>| FAQs |</Link>   
          <Link to='/login'>| Login |</Link>   
          <Link to='/Not Found Route'>| 404 ||</Link>   
        </aside>


        <main>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LogginPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faqs' element={<AboutPage />} />
            <Route path='/profile' element={logged ? (<Profile />)
              :
              (<Navigate to='/login' />)}
            />
            <Route path='/task' element={<TaskPage />} />
            <Route 
              exact
              path='/task/:id' 
              render = {
                ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]}></TaskDetailPage>)
              }
              element={<TaskDetailPage />} />
            {/* 404 Page Not Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>

        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;