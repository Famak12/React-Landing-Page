import React from "react";

function Middlecontainer() {
    return (
        <section className="middle-container">
            <div> 
                <h1 className="animate__animated animate__fadeIn animate__slower">Our Most Popular Destinations</h1>
            </div>
            <div className="destinations-div">
                <div><img src="/images/Los-Angeles-at-night.jpg" alt="" style={{width: "350px", height: "300px"}}/> <p style={{color: "red"}}>Los Angeles</p> </div>
                <div><img src="/images/London.jpg" alt="" style={{width: "350px", height: "300px"}}/>  <p style={{color: "red"}}>London</p> </div>
                <div><img src="/images/zurich.jpg" alt="" style={{width: "350px", height: "300px"}} /> <p style={{color: "red"}}>Zurich</p> </div>
            </div>
           

        </section>
    )
}

export default Middlecontainer;