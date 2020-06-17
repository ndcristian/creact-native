import React from 'react';

import Directory from '../../components/directory/directory.component';
import Header from '../../components/header/header.component';
import SearchBar from '../../components/search/search.component';
import Promo from '../../components/promo/promo.component';
import Check from '../../components/check/check.component';
import { Container } from 'react-bootstrap';
import './homepage.styles.scss';

const HomePage = () => (
  <Container className='mainContainer'>
    <Header />
    <SearchBar />
    <Promo />
    <Check />
    <Directory />
  </Container>
);

export default HomePage;
