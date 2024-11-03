// client/src/App.js
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import NoMatch from "./Components/NoMatch";
import Home from './Pages/Home';
import Users from './Pages/Users';
import About from './Pages/About';
import NewUserForm from './Pages/NewUserForm';

const App = () =>{
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/newuser" element={<NewUserForm />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;