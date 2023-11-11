
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Main from './pages/Main';
import Cv from "./pages/CV"

function App() {
  
    return (
      <div>
        <Main />
        <About />
        <Skills />
        <Projects />  
        <Cv/>
      
    </div>
  )
}

export default App
