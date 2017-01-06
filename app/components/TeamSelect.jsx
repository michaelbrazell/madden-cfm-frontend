var React = require('react');

var TeamSelect = React.createClass({
  render: function () {
    return (
      <option key={this.props.key} value={this.props.combineName}>{this.props.cityName} {this.props.displayName}</option>
    )
  }
});

module.exports = TeamSelect;
