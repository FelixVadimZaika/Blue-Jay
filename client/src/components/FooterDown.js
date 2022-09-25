import React from 'react';
import company from '../assets/company.png'
import contactUs from '../assets/phone.png'
import visitUs from '../assets/location.png'
import {Badge} from "react-bootstrap";

const FooterDown = () => {
    return (
        <footer style={{background:"#232F3E",color:"white"}} className=" text-center pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-6 col-md">
                    <img src={company}/>
                    <h5>Blue Jay</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary">Про нас</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <img src={contactUs}/>
                    <h5>Зв'яжіться з нами</h5>
                    <ul className="list-unstyled text-small">
                        <h7>Phone: (068)440-7234</h7>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <img src={visitUs}/>
                    <h5>Відвідайте нас</h5>
                    <ul className="list-unstyled text-small">
                       <p>Zastavya Rivnenska obl, Goscha</p>

                    </ul>
                </div>
            </div>
            <hr/>
            <h6>
                2022 <Badge bg="secondary">Blue-Jay Fasteners</Badge> Всі права захищені.
            </h6>
            <hr/>
        </footer>

    );
};

export default FooterDown;