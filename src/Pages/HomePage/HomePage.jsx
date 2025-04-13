import "./style.css"
import logo from '../../assets/logo.png'
import cat1 from '../../assets/home_cat_bakery.jpg'
import cat2 from '../../assets/home_cat_chinesse.jpg'
import cat3 from '../../assets/home_cat_hamburgher.jpg'
import cat4 from '../../assets/home_cat_pizza.jpg'
import cat6 from '../../assets/home_cat_vegetarian.jpg'
import cta1 from '../../assets/toprr/location_list_1.jpg'
import cta2 from '../../assets/toprr/location_list_2.jpg'
import cta3 from '../../assets/toprr/location_list_3.jpg'
import cta4 from '../../assets/toprr/location_list_4.jpg'
import cta5 from '../../assets/toprr/location_list_5.jpg'
import cta6 from '../../assets/toprr/location_list_6.jpg'
import how1 from '../../assets/CTA/how_1.svg'
import how2 from '../../assets/CTA/how_2.svg'
import how3 from '../../assets/CTA/how_3.svg'
const Home =()=>{
    return(
     <>
    <header className="flex">
    <nav className="navbar flex">
        <div className="logo">
            <img src={logo} alt="" className="flex"/>
        </div>
        <div className="navmenu">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">SingUp</a></li>
            </ul>
        </div>
    </nav>
    </header>
    <main>
        <section>
            <div className="herosection flex">
            <div className="herocontainer">
                <h1>Dilivery Or Takeaway Food</h1>
                <h2>The best Rasturent at the best Price</h2>
            
                <div className="herosearch">
                    <input type="text" placeholder="Address, Naighborhood"/>
                    <button id="herobutton">Search</button>

                </div>
            <p>
            <span>Tranding:-</span>
            <span><a href="">Punjabi,</a></span>
            <span><a href="">Chinise,</a></span>
            <span><a href="">Gujrati,</a></span>
            <span><a href="">Rajasthani</a></span>
        </p>

      </div>
</div>
        </section>
        <section className="categories flex">
            <div className="catcontainer">
                <h1>Popular Categories</h1>
                <p> Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                <div className="catboxes flex">
                    <div className="catbox">
                        <img src={cat4} alt=""/>
                        <div className="catboxcontent">
                            <h3>Pizza</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div className="catbox">
                        <img src={cat3}alt=""/>
                        <div className="catboxcontent">
                            <h3>Burgher</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div className="catbox">
                        <img src={cat6} alt=""/>
                        <div className="catboxcontent">
                            <h3>Vegetarian</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div className="catbox">
                        <img src={cat1} alt=""/>
                        <div className="catboxcontent">
                            <h3>Bakery</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div className="catbox">
                        <img src={cat2} alt=""/>
                        <div className="catboxcontent">
                            <h3>Chinese</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <section className="toprr flex">
            <div className="toprrcontainer">
                <h2 id="ttoprr">Top Rated Restaurants</h2>
                <p className="toprrdesc">
                  Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
                <div className="toprrboxes">
                <div className="toprrboxesleft">
                    <div className="toprrboxleft">
                        <a href="/"
                        ><div className="toprrbox flex">
                          <div className="toprrboxleft">
                            <img src={cta1} alt="" />
                          </div>
                          <div className="toprrboxright">
                            <span>Italian</span>
                            <h3>La Monnalisa</h3>
                            <p>8 Patriot Square E2 9NF</p>
                            <small>Average Price $30</small>
                          </div>
                        </div></a
                      >
                      <a href="/"
                        ><div className="toprrbox flex">
                          <div className="toprrboxleft">
                            <img src={cta2} />
                          </div>
                          <div className="toprrboxright">
                            <span>Italian</span>
                            <h3>La Monnalisa</h3>
                            <p>8 Patriot Square E2 9NF</p>
                            <small>Average Price $30</small>
                          </div>
                        </div></a
                      >
                      <a href="/"
                        ><div className="toprrbox flex">
                          <div className="toprrboxleft">
                            <img src={cta3} />
                          </div>
                          <div className="toprrboxright">
                            <span>Italian</span>
                            <h3>La Monnalisa</h3>
                            <p>8 Patriot Square E2 9NF</p>
                            <small>Average Price $30</small>
                          </div>
                        </div></a
                      >
                    </div>
              </div>
                <div className="toprrboxesright">
                        <div className="toprrboxright">
                            <a href="/"
                            ><div className="toprrbox flex">
                              <div className="toprrboxleft">
                                <img src={cta4} />
                              </div>
                              <div className="toprrboxright flex">
                                <span>Italian</span>
                                <h3>La Monnalisa</h3>
                                <p>8 Patriot Square E2 9NF</p>
                                <small>Average Price $30</small>
                              </div>
                            </div></a
                          >
                          <a href="/"
                            ><div className="toprrbox flex">
                              <div className="toprrboxleft">
                                <img src={cta5} />
                              </div>
                              <div className="toprrboxright">
                                <span>Italian</span>
                                <h3>La Monnalisa</h3>
                                <p>8 Patriot Square E2 9NF</p>
                                <small>Average Price $30</small>
                              </div>
                            </div></a
                          >
                          <a href="/"
                            ><div className="toprrbox flex">
                              <div className="toprrboxleft">
                                <img src={cta6} />
                              </div>
                              <div className="toprrboxright">
                                <span>Italian</span>
                                <h3>La Monnalisa</h3>
                                <p>8 Patriot Square E2 9NF</p>
                                <small>Average Price $30</small>
                              </div>
                            </div></a
                          >
                        </div>
                        </div>
                </div>
              </div>
            

        </section>
        <section className="start flex">
          <div className="startcontainer">
            <p>FooYes Delivery</p>
            <h1>We Deliver to your Office</h1>
            <h2>Enjoy a tasty food in minutes!</h2>
            <button>Start Now!</button>

          </div>
     </section>
     <section className="cta flex">
      <div className="ctacontainer flex">
        <div className="ctaLeft flex">
          <div className="ctaBox flex">
            <div className="ctaBoxChild">
              <img src={how1}/>
              <h3>Easly Order</h3>
              <p>
                Faucibus ante, in porttitor tellus blandit et. Phasellus
                tincidunt metus lectus sollicitudin.
              </p>
            </div>
            <div className="ctaBoxChild">
              <img src={how2} />
              <h3>Quick Delivery</h3>
              <p>
                Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                hendrerit nulla, id vestibulum.
              </p>
            </div>
          </div>
          <div className="ctaBox">
            <div className="ctaBoxChild">
              <img src={how3}/>
              <h3>Enjoy Food</h3>
              <p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros.
              </p>
            </div>
          </div>
        </div>
        <div className="ctaRight">
          <h2>Start Ordering Now</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet libero id nisi euismod, sed porta est consectetur
            deserunt.
          </p>
          <small
            >Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</small
          >
          <div><a href="/">Register</a></div>
        </div>
      </div>
    </section>
    </main>
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
 export default Home;