import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBars from "../components/TypeBars";
import BrandBarbi from "../components/BrandBarbi";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null,null,1,2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },[])
    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page,2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },[device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBars/>
                </Col>
                <Col md={9}>
                    <BrandBarbi/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;