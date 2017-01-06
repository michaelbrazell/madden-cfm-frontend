var React = require('react');

var TeamCard = React.createClass({
  render: function() {
    return (
      <div className="columns small-12 medium-6 large-3" key={this.props.key}>
        <div className="card">
          <div className={'image color-'+ this.props.abbrName +' logo-'+ this.props.abbrName}>
            <span className="badge primary">{this.props.ovrRating}</span>
          </div>
          <div className="content">
            <p className="title">{this.props.cityName} {this.props.displayName}</p>
            <p>Division: {this.props.divName}</p>
            <p>{ this.props.userName.length > 1 ?  this.props.userName : 'Not owned' }</p>
          </div>
          <div className="action">
            <a href='#'>View Team</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TeamCard;
