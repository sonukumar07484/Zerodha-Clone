import React from 'react';

function Universe() {
    return ( 
          <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even furter with our partner platforms</p>

                 <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className='text-muted  text-small'>Thematic investment platform</p>
                </div>
                
                
                 <div className='col-4 p-3 mt-5'>
                      <img src="media/images/goldenpiLogo.png"/>
                    <p className='text-muted  text-small'>Options trading platform</p>
                </div>
                  <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png"/>
                    <p className='text-muted  text-small'>Asset management</p>
                </div>

                 <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto "}}>Signup now</button>
                  
                    </div>
                </div>
     );
}

export default Universe;