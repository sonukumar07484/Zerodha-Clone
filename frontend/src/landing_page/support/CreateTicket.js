import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-4 '>To create a ticket,select a relevant topic</h1>
            
            <div className='col-4 p-5 mt-5 mb-5'>
                <h4 className=''><i class="fa-solid fa-plus"></i>Account Opening</h4>
                <a href='' style={{textDecoration:"none",lineHeight:"2"}}>Online Account Opening</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Offline Account Opening</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Company,Partnership and Huf Account</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Opening</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>NRI Account Opening</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Charges at Zerodha</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Getting Standard</a><br/>
            </div>
              <div className='col-4 p-5 mt-5 mb-5'>
                <h4 className=''><i class="fa-solid fa-plus"></i>Your Zerodha Account</h4>
                <a href='' style={{textDecoration:"none",lineHeight:"2"}}>Login Credentials</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Account Modification and Segment Addition</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>DP ID and bank details</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Your Profile</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Transfer and conversion of shares</a><br/>
               
            </div>
              <div className='col-4 p-5 mt-5 mb-5'>
                <h4 className=''><i class="fa-solid fa-plus"></i>Company</h4>
                <a href='' style={{textDecoration:"none",lineHeight:"2"}}>Margin/laverage,product and Order types</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Kite Web and Mobile</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Trading FAQs</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Corporate Actions</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Sentinel</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Kite API</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Pi and other platforms</a><br/>
                <a href=''style={{textDecoration:"none",lineHeight:"2"}}>Getting Started</a><br/>
            </div>
            </div>
            </div>
     );
}

export default CreateTicket;