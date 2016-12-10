var React = require('react');

var LeagueInfo = React.createClass({
  render: function() {
    var teamInfo = [
    {
      "abbrName" : "BAL",
      "cityName" : "Baltimore",
      "defScheme" : 11,
      "displayName" : "Ravens",
      "divName" : "AFC North",
      "injuryCount" : 4,
      "logoId" : 24,
      "nickName" : "Ravens",
      "offScheme" : 0,
      "ovrRating" : 79,
      "primaryColor" : 4985505,
      "secondaryColor" : 0,
      "teamId" : 757727261,
      "userName" : ""
    },
    {
      "abbrName" : "PIT",
      "cityName" : "Pittsburgh",
      "defScheme" : 11,
      "displayName" : "Steelers",
      "divName" : "AFC North",
      "injuryCount" : 4,
      "logoId" : 28,
      "nickName" : "Steelers",
      "offScheme" : 1,
      "ovrRating" : 83,
      "primaryColor" : 16763904,
      "secondaryColor" : 0,
      "teamId" : 757727265,
      "userName" : ""
    }
    ];
    var htmlText = '';
    for ( var key in teamInfo ) {
      htmlText += '<p class="p-name"> Name: ' + teamInfo[key].abbrName + '</p>';
      htmlText += '<p class="p-loc"> Location: ' + teamInfo[key].cityName + '</p>';
      htmlText += '<p class="p-desc"> Overall: ' + teamInfo[key].ovrRating + '</p>';
    }
    return (
      <div>
        <h1>League Info</h1>
        <p>To do:</p>
        <ul>
          <li>Loop through teams from leagueTeamInfo.json</li>
        </ul>
        <h2>Teams</h2>
        { htmlText }



      </div>
    );
  }
});

module.exports = LeagueInfo;
