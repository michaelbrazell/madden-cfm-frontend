var React = require('react');
var data = require('json!../../public/data/leagueTeamInfoList.json');

var TeamCard = React.createClass({
  getInitialState: function() {
    var teams = data;
    return { teams };
  },
  render: function() {
    return (
      <div>
        {this.state.teams.map(function(team, i){
           return (
            <div className="columns small-12 medium-6 large-3" key={i}>
              <div className="card">
                <div className={'image color-'+ team.abbrName}>
                  <span className="title">{team.cityName} {team.displayName}</span>
                </div>
                <div className="content">
                  <p>Overall: {team.ovrRating}</p>
                  <p>Division: {team.divName}</p>
                  <p>{ team.userName.length > 1 ?  team.userName : 'Not owned' }</p>
                </div>
                <div className="action">
                  <a href='#'>View Team</a>
                </div>
              </div>
            </div>
           )
         })}
      </div>
    );
  }
});

module.exports = TeamCard;
