import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about-faqs/AboutPage.jsx';
import NotFoundPage from './pages/404/notFoundPage.jsx';
import Profile from './pages/Profile/profile.jsx';


function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to= '/'>||  Home |</Link>
          <Link to= '/about'>| About |</Link>
          <Link to= '/faqs'>| FAQs |</Link>   
          <Link to= '/Not Found Route'>| 404 ||</Link>   
        </aside>
      

        <main>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/faqs' element={<AboutPage />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            {/* 404 Page Not Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>

        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;