var React = require('react');

var TeamSelect = React.createClass({
  render: function () {
    return (
      <option key={this.props.key} label={this.props.combinedName}>{this.props.combinedName}</option>
    )
  }
});

module.exports = TeamSelect;
