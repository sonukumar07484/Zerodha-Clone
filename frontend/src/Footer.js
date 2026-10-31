import React from "react";

function Footer(){
    return(
        <div className="container border-top mt-5" style={{backgroundColor:"rgb(240,240,240)"}}>
            <div className="row mt-5">
                <div className="col">
                    <img src="media/images/logo.svg" style={{width:"50%"}}/>
                    <p>© 2010 - 2026, Zerodha Broking Ltd. <br/>All rights reserved.</p>
                </div>
                <div className="col" style={{textDecoration:"none"}} >
                    <p>Company</p>
                    <a href="">About</a>
                     <br/>
                    <a href="">Products</a><br/>
                    <a href="">Pricing</a><br/>
                    <a href=""> Referral programs</a><br/>
                    <a href=""> Careers</a><br/>
                    <a href="">Zerodha.tech</a><br/>
                    <a href="">press&media</a><br/>
                    <a href="">Zerodha cares</a><br/>
                </div>
                <div className="col" style={{textDecoration:"none"}}>
                    <p>Support</p>
                    <a href="">Contact</a> <br/>
                    <a href="">Support Portal</a><br/>
                    <a href="">Z-Connect blog</a><br/>
                    <a href="">List of charges</a><br/>
                    <a href="">Downloads & resources</a><br/>
                </div>
                <div className="col" style={{textDecoration:"none"}}>
                    <p>Account</p>
                    <a href="">Open an account</a><br/>
                    <a href="">Fund transfer</a><br/>
                    <a href="">60 day challenge</a><br/>
                </div>
            </div>
            <div className="mt-5 fs-10 text-muted">
            <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <br/>
            <p>Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances</p>
            <br/>
            <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism

Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        </div>
        </div>
    )
}
export default Footer;
