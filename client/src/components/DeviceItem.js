import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{border: '2px solid lightgray', width: 160, cursor: 'pointer'}}>
                <Image width={150} height={170} src={process.env.REACT_APP_API_URL + device.img}/><br/>
                <div style={{width: '90%', margin: '0 auto', textalign: 'center'}}>{device.name}<br/>
                    Ціна: {device.price} грн.</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;