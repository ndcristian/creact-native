var React = require('react');

class BodyRight extends React.Component {
  
  render() {
    //if not "locals" set , then this.props.locals.user will cause an error and we can't check if user exist 
    // this pice of code help us to avaoid this error and use check user and error_msg.length
    //console.log('din default.jsx this.props is:', this.props);

    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 event-container bodyRight">

          Body Right

     </div>
    );
  }
}

module.exports = BodyRight;