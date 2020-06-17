import React from 'react';

import { Navbar, FormControl, Form, Button, Row, Col } from 'react-bootstrap';
import './search.styles.scss';

const SearchBar = () => (
    <Navbar>
        <Form  className="customSearchForm" >
            <Row>
                <Col xs="6" className="colCustom">
                    <FormControl type="text" placeholder="Locatia" className="" />
                </Col >
                <Col xs="4" className="colCustom">
                    <FormControl type="text" placeholder="Judet" className="" />
                </Col>
                <Col  className="colCustom">
                    <Button variant="outline-success">Go</Button>
                </Col>
            </Row>
        </Form>
    </Navbar>
)
export default SearchBar;