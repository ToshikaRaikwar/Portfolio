import logo from './logo.svg';
import './App.css';
import {Projects} from './components/Projects.js'
import {NavBar} from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import {Banner} from './components/Banner.js'
import { Skills } from './components/Skills';
import {Contact} from './components/Contact';
function App() {
  return (
      <div className='App'>
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
