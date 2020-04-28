var React = require('react');

class BodyCenter extends React.Component {
  
  render() {
    //if not "locals" set , then this.props.locals.user will cause an error and we can't check if user exist 
    // this pice of code help us to avaoid this error and use check user and error_msg.length
    //console.log('din default.jsx this.props is:', this.props);

    return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 event-container bodyCenter">

          Body Center

     </div>
    );
  }
}

module.exports = BodyCenter;