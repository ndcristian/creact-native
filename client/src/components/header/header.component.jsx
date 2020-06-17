import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './header.styles.scss';

import { connect } from 'react-redux';

const Header = ({ currentLocation }) => (
    <Jumbotron className="customJumbotron">
        {currentLocation ? (
            <div>
                currentLocation
            </div>

        ) : (
                <div>
                    No current
                </div>
            )
        }
    </Jumbotron>
);

const mapStateToProps = (state) => {
    console.log('header state : ', state);
    return { currentLocation: state.location.currentLocation };
}

export default connect(mapStateToProps)(Header);