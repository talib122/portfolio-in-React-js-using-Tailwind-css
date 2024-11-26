import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/pages/homePage/homePage';
import Footer from './components/Footer/Footer';
import Skills from './components/skills/skill';
import Projects from './components/pages/projects/projects';
import ContactSection from './components/pages/contact/contact';
import ExperienceSection from './components/pages/ExperienceSection/ExperienceSection';
function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<HomePage/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<ContactSection/>}/>
      <Route path='/experience' element={<ExperienceSection/>}/>
    </Routes> 
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
