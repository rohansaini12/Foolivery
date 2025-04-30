import "./About.css"
import barimg from "../../assets/About/bar.jpg"
import cheafleft from "../../assets/About/cheafleft.jpg"
import cheafright from "../../assets/About/cheafright.jpg"
const About =()=>{
    return(
        <>
        <div className="Aboutpage">
        <div className="About">
        </div>
        <h1>About Us</h1>
        </div>
            <div className="Aboutus">
              <div className="leftcontent">
               <img src={barimg}/>
              </div>
              <div className="rightcontent">
                <h2>Our bar</h2>
                <h1>Sit back & relax</h1>
                 <p>where the lights are warm, the drinks are smooth, and the atmosphere feels like home. At Our Bar, we believe in simple pleasures: great conversations, good music, and a place where you can just... breathe.
                    Whether you're winding down after a long day or kicking off a night to remember, there's always a seat waiting for you. So pull up a chair, sip something you love, and let the world slow down for a while.</p>
              </div>
        </div>
        <div className="ourseat">
              <div className="leftseat">
              <img src={cheafleft}/>
              <h1>Book a Table</h1>
              <button>Reserve</button>
              </div>
              <div className="rightseat">
              <img src={cheafright}/>
              <h1>Our Coktails</h1>
              <button>Our Menu</button>
              </div>
        </div>
        <div className="Tablebook">
            <h1>BOOK TABLE</h1>
            <a href="/Contact"><button>Contact Us</button></a>
           
        </div>
        </>
    )
}
export default About;