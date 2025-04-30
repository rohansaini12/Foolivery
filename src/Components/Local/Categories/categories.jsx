import "./categories.css"
import cat1 from '../../../assets/home_cat_bakery.jpg'
import cat2 from '../../../assets/home_cat_chinesse.jpg'
import cat3 from '../../../assets/home_cat_hamburgher.jpg'
import cat4 from '../../../assets/home_cat_pizza.jpg'
import cat6 from '../../../assets/home_cat_vegetarian.jpg'
const Categories=()=> {
    return(
        <>
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
        </>
    )
}
export default Categories;