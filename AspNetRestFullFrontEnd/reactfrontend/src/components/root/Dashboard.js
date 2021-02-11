import React, { Component } from 'react'
import {Row,Col} from "reactstrap"
import SirketList from "../sirketler/SirketList"
import BirimList from "../birimler/BirimList";

export default class DashBoard extends Component {
    render() {
        return (
            <div>
            <Row>
                <Col xs="3">
                    <SirketList/>
                </Col>
                <Col xs="9">
                    <BirimList/>
                </Col>
            </Row>
                
            </div>
        )
    }
}
