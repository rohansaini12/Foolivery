import Navbar from "../../Components/global/Navbar/navbar.jsx"
import Footer from "../../Components/global/Footer/footer.jsx"
import Hero from "../../Components/Local/Hero/hero.jsx"
import Categories from "../../Components/Local/Categories/categories.jsx"
import Toprr from "../../Components/Local/Toprr/toprr.jsx"
import Start from "../../Components/Local/Start/start.jsx"
import Cta from "../../Components/Local/Cta/cta.jsx"
const Home =()=>{
    return(
     <>
    <main>
        <Hero/>
       <Categories/>
       <Toprr/>
       <Start/>
       <Cta/>
    </main>
</>
     )
}
 export default Home;