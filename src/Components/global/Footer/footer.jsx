import "./footer.css"
const Footer =()=>{
    return(
        <>
        <footer className="footer flex">
      <div className="footercontainer">
        <div className="link">
          <ul>
             <li><h3><a href="">Quick Links</a></h3></li>
             <li><a href="">About us</a></li>
             <li><a href="">Add your restaurant</a></li>
             <li><a href="">Help</a></li>
             <li><a href="">Blog</a></li>
             <li><a href="">Contacts</a></li>
            </ul>
          </div>
          <div className="cat">
           <ul><li> <h3><a href="">Categories</a></h3></li>
            <li><a href="">Top Categories</a></li>
            <li><a href="">Best Rated</a></li>
            <li><a href="">Best Price</a></li>
            <li><a href="">Latest Submissions</a></li>
            </ul>
         </div>
         <div className="contact">
          <ul>
          <li> <h3><a href="">Contact</a></h3></li>
          <li> <a href="">97845 Baker st. 567
              Los Angeles - US</a></li>
              <li> <a href="">+94 423-23-221</a></li>
              <li><a href="">info@domain.com</a></li>
            </ul>
          
         </div>
         <div className="touch">
          <h3><a href="">KEEP IN TOUCH</a></h3>
            <input type="text" placeholder="Your Email"/>

          </div>
         </div>
        <div>
    </div>

     </footer>
        </>
    )
}
export default Footer;