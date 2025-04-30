import "./hero.css"
const Hero =()=>{
    return(
        <>
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
        </>
    )
}
export default Hero;

