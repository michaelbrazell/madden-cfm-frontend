var React = require('react');

var PlayerCard = React.createClass({
  render: function () {
    return (
      <div key={this.props.key} className="columns small-6 medium-3">
        <div className="callout">
          <h4>{this.props.firstName} {this.props.lastName}, {this.props.position}</h4>
          <p><strong>Age</strong>: {this.props.age}, <strong>College</strong>: {this.props.college}, <strong>Overall</strong>: {this.props.playerBestOvr}</p>
        </div>
      </div>
    )
  }
});

module.exports = PlayerCard;
