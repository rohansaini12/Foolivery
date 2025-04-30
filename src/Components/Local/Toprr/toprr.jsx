import "./toprr.css"
import cta1 from '../../../assets/toprr/location_list_1.jpg'
import cta2 from '../../../assets/toprr/location_list_2.jpg'
import cta3 from '../../../assets/toprr/location_list_3.jpg'
import cta4 from '../../../assets/toprr/location_list_4.jpg'
import cta5 from '../../../assets/toprr/location_list_5.jpg'
import cta6 from '../../../assets/toprr/location_list_6.jpg'
const Toprr=()=>{
return(
    <>
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
    </>
)
}
export default Toprr;