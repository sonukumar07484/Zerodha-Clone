import React from 'react';

function Hero() {
    return ( 
      <section className='container-fluid' style={{backgroundColor:"rgb(56,126,209)",color:"white"}}>
            <div className=' p-5 mt-5 mb-5' style={{display:"flex",justifyContent:"space-between",margin:" 0 150px"}}>
                <h4>Support Portal</h4>
                <a href="" style={{textDecoration:"none",color:"white"}}>Tracks Tickets</a>
            </div>
             <div className='row p-5 mx-5'>
                 <div className='col-6  '>
                    <h1 className='fs-3'>Search for an answer or browse help <br/>topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O' style={{padding:"20px 50px",width:"100%",fontSize:"20px",borderradius:"20px",border:"none"}}/> <br/>
                   <a href='' style={{textDecoration:"none",color:"white"}}>Track account opening</a> <br/>
                     <a href='' style={{textDecoration:"none",color:"white"}}>Track segment activation</a><br/>
                      <a href='' style={{textDecoration:"none",color:"white"}}>Intraday margins</a><br/>
                       <a href='' style={{textDecoration:"none",color:"white"}}>Kite user manual</a><br/>
                 </div>
                  <div className='col-6 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                         <a href='' style={{textDecoration:"none",color:"white"}}>Current Takeovers and Deslistings-january 2024</a> <br/>
                     <a href='' style={{textDecoration:"none",color:"white"}}>Latest intraday leverages-Mis & co</a><br/>
                    </ol>
                  </div>
            </div>
        
        </section>
     );
}

export default Hero;