import React from 'react';
// import '../../vendors/css/bootstrap.css';

function Header() {
  return (
 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 event-container antet">
    
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 event-container antet centerV left fontXL antetTitle">
      <p> Etix Environment Monitor </p>
     </div>
    
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 event-container antet">
        <ul className="nav nav-pills pull-right antet">
              <li role="presentation">
                  <a href="/users/logout" className="antet">Login </a>
              </li>
              <li role="presentation">
                  <a href="/users/account" className="antet">UserName </a>
              </li>
              <li role="presentation">
                  <a href="/admin" className="antet">UserRoll </a>
              </li>
          </ul>
      </div>
    
</div>
  );
}

export default Header;
