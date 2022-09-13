import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home'
import About from './About/About'
import Catalog from './Catalog/Catalog'
import './App.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Header from './Header/Header';
import CharIndex from './Characters/CharIndex';
import Company from './About/Company'
import History from './About/History'
import Contact from './About/Contact'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />}>
            <Route path="" element={<Company />} />
            <Route path="history" element={<History />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/characters/*" element={<CharIndex />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
