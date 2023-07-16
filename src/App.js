import './App.css';
import AboutUs from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import HomePage from './Components/Pages/HomePage';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/Layout/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/Pages/PageNotFound';
// eslint-disable-next-line no-unused-vars
import AddUser from './Components/user/AddUser';
import AddUserNew from './Components/user/AddUserNew';
import EditUser from './Components/user/EditUser';
import ViewUser from './Components/user/ViewUser';


function App() {
  return (
    <div >
       <Router>
      <div >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUserNew />} />
          <Route exact path="/users/edit/:userId" element={<EditUser />} />
          <Route exact path="/users/view/:userId" element={<ViewUser />} />
          <Route path="*" element={<PageNotFound/>} />
          </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
