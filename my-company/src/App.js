import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
<nav>
  <Link to='/'>Home</Link>
  <Link to='/Contact'>Contact</Link>
  <Link to='/About'>About</Link>
  <Link to='/Services'>Services</Link>
</nav>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Services' element={<Services/>}/>
<Route path='*' element={<h1>Page Not Found</h1>}/>
</Routes>
     </Router>
    </div>
  );
}

export default App;
