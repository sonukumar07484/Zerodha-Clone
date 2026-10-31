import React from "react";

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/largestBroker.svg" alt="largestBroker"/>
                </div>
                <div className="col-6 p-5 ">
                    <h1>Largest stock broker in india</h1>
                    <p className="mb-5">2+million Zerodha clients contribute to over 15% of all volume
                        in india daily by trading and investing in: </p>
                        <div className="row">
                            <div className="col-6 p-5">
                                <ul>
                                    <li>future and options</li>
                                    <li>commodity and deratives</li>
                                    <li>currency deratives</li>
                                </ul>
                            </div>
                            <div className="col-6 p-5">
                                <ul>
                                    <li>Stocks and ipo</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and govn Securities</li>
                                </ul>
                            </div>
                        </div>
                        <img src="media/images/pressLogos.png" alt="pressLogos"style={{width:"90%"}}/>
                        </div>
                <div/>
            </div>  
        </div>
    );
}
export default Awards;