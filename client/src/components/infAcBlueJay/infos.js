import React from 'react';
import './style.css';
import backF1 from '../../assets/backFone1.png'
const Infos = () => {

    return (
        <body>
        <h2>Get <b>Your Company An Account</b></h2>
        <div className="container-osn">
            <div className="container-01 col2">
                <h3><font class="number"> 01</font> Organize Your Business</h3>
                <p>We understand the importance and need for fast turnaround times and make this a high priority when
                    working with your project schedules. Our commitment is to give you a quality product at competitive
                    prices with fast and dependable service.</p>
            </div>
            <div className="col1">
                <img className="img" src={backF1}/>
            </div>

            <div className="col3">
                <img className="img2" src={backF1}/>
            </div>
            <div className="container-02 col4">
                <h3><font class="number"> 02</font>Organize Your Business</h3>
                <p>We understand the importance and need for fast turnaround times and make this a high priority when
                    working with your project schedules. Our commitment is to give you a quality product at competitive
                    prices with fast and dependable service.</p>
            </div>
            <div className="container-01 col6">
                <h3><font class="number"> 03</font>Organize Your Business</h3>
                <p>We understand the importance and need for fast turnaround times and make this a high priority when
                    working with your project schedules. Our commitment is to give you a quality product at competitive
                    prices with fast and dependable service.</p>
            </div>
            <div className="col5">
                <img className="img" src={backF1}/>
            </div>
        </div>
        </body>
    );
};

export default Infos;