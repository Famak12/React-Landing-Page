import React, {useState} from "react";

function Middlecontainer() {

  

    return (
        <section className="middle-container">
            <div> 
                <h1 className="animate__animated animate__fadeIn animate__slower heading1">Our Most Popular Destinations</h1>
            </div>
            <div className="destinations-div">
                <div><img src="/images/Los-Angeles-at-night.jpg" alt=""/> <p>Los Angeles</p> </div>
                <div><img src="/images/London.jpg" alt=""/>  <p>London</p> </div>
                <div><img src="/images/zurich.jpg" alt=""/> <p>Zurich</p> </div>
            </div>
            <div className="about-div">
                <h2>A Little About Us</h2>
                <p>It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
                    here, content here', making it look like readable English. Many desktopn publishing packages and web pages. </p>
                <p style={{color: "red"}}>READ MORE</p>

            </div>
        </section>
    )
}

export default Middlecontainer;