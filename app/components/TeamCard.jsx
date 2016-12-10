var React = require('react');

var TeamCard = React.createClass({
  getInitialState: function() {
    var teams = [
    {
      "abbrName" : "BAL",
      "cityName" : "Baltimore",
      "displayName" : "Ravens",
      "divName" : "AFC North",
      "ovrRating" : 79,
      "teamId" : 757727261,
      "userName" : ""
    }, {
      "abbrName" : "PIT",
      "cityName" : "Pittsburgh",
      "displayName" : "Steelers",
      "divName" : "AFC North",
      "ovrRating" : 83,
      "teamId" : 757727265,
      "userName" : ""
    }
    ];
    return { teams };
  },
  render: function() {
    return (
      <div>
        {this.state.teams.map(function(team, i){
           return (
            <div className="columns small-12 medium-3" key={i}>
              <h4>{team.cityName} {team.displayName}</h4>
              <p>Overall: {team.ovrRating}</p>
            </div>
           )
         })}
      </div>
    );
  }
});

module.exports = TeamCard;
