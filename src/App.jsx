import Homepage from "./Pages/HomePage/HomePage.jsx"
import Aboutpage from "./Pages/Aboutpage/About.jsx"
import Contactpage from"./Pages/Contactpage/Contact.jsx"
import Signuppage from "./Pages/Signuppage/Signup.jsx"
import Navbar from "./Components/global/Navbar/navbar.jsx"
import Footer from "./Components/global/Footer/footer.jsx"
import Login  from "./Pages/Login/Login.jsx"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
        <Route path="/about" element ={<Aboutpage/>}/>
        <Route path="/contact" element ={<Contactpage/>}/>
        <Route path="/signup" element ={<Signuppage/>}/> 
        <Route path="/login" element ={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
