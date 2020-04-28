var React = require('react');

var BodyLeft = require ('./BodyLeft') ;
var BodyCenter = require ('./BodyCenter') ;
var BodyRight = require ('./BodyRight') ;


class HeaderRenderWay extends React.Component {
  
  render() {
 
    return (
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bodyZone">
        <BodyLeft> 111
        </BodyLeft>
  
        <BodyCenter> 222
        </BodyCenter>
    
        <BodyRight> 333
        </BodyRight>
    
</div>
    );
  }
}

module.exports = HeaderRenderWay;