import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Footer from './Footer';
import Main from './Main';
import { Routes, Route, Link } from "react-router-dom";
import Projects from './Projects';
import Resume from './Resume';



function App() {
  return (
    <div className="App">
      <Header/>
  <Routes>
  <Route path="projects" element={<Projects/>} />
  <Route path="/" element={<About/>} />
  <Route path="resume" element={<Resume/>}/>
  </Routes>
      <Footer/>
    </div>
  );
}

export default App;
