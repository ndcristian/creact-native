import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => (
    <Container>
        <Row>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col sm="4">.col-sm-4</Col>
        </Row>
    </Container>

);

export default Header;