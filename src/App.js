import {  Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import About from "./components/About";

function App() {
  return (
   <>
     <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>
   </>
  );
}
export default App;
