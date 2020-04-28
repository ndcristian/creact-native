import React from 'react';
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';
import BodyCenter from './BodyCenter';

function BodyZone() {
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

export default BodyZone;