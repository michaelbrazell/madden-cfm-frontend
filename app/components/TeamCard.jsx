var React = require('react');
var TeamData = require('../../public/data/leagueTeamInfoList.json');

var TeamCard = React.createClass({
  getInitialState: function() {
    var teams =
    [ {
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
    }, {
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
    }, {
      "abbrName" : "CIN",
      "cityName" : "Cincinnati",
      "defScheme" : 6,
      "displayName" : "Bengals",
      "divName" : "AFC North",
      "injuryCount" : 2,
      "logoId" : 1,
      "nickName" : "Bengals",
      "offScheme" : 3,
      "ovrRating" : 85,
      "primaryColor" : 15220224,
      "secondaryColor" : 0,
      "teamId" : 757727235,
      "userName" : ""
    }, {
      "abbrName" : "CLE",
      "cityName" : "Cleveland",
      "defScheme" : 9,
      "displayName" : "Browns",
      "divName" : "AFC North",
      "injuryCount" : 2,
      "logoId" : 4,
      "nickName" : "Browns",
      "offScheme" : 4,
      "ovrRating" : 77,
      "primaryColor" : 16727040,
      "secondaryColor" : 2233612,
      "teamId" : 757727238,
      "userName" : ""
    }, {
      "abbrName" : "JAX",
      "cityName" : "Jacksonville",
      "defScheme" : 6,
      "displayName" : "Jaguars",
      "divName" : "AFC South",
      "injuryCount" : 3,
      "logoId" : 16,
      "nickName" : "Jags",
      "offScheme" : 4,
      "ovrRating" : 86,
      "primaryColor" : 99227,
      "secondaryColor" : 0,
      "teamId" : 757727251,
      "userName" : ""
    }, {
      "abbrName" : "TEN",
      "cityName" : "Tennessee",
      "defScheme" : 7,
      "displayName" : "Titans",
      "divName" : "AFC South",
      "injuryCount" : 2,
      "logoId" : 29,
      "nickName" : "Titans",
      "offScheme" : 3,
      "ovrRating" : 82,
      "primaryColor" : 2077183,
      "secondaryColor" : 2077183,
      "teamId" : 757727267,
      "userName" : ""
    }, {
      "abbrName" : "HOU",
      "cityName" : "Houston",
      "defScheme" : 11,
      "displayName" : "Texans",
      "divName" : "AFC South",
      "injuryCount" : 4,
      "logoId" : 31,
      "nickName" : "Texans",
      "offScheme" : 3,
      "ovrRating" : 82,
      "primaryColor" : 1820,
      "secondaryColor" : 10685741,
      "teamId" : 757727266,
      "userName" : ""
    }, {
      "abbrName" : "IND",
      "cityName" : "Indianapolis",
      "defScheme" : 6,
      "displayName" : "Colts",
      "divName" : "AFC South",
      "injuryCount" : 1,
      "logoId" : 9,
      "nickName" : "Colts",
      "offScheme" : 4,
      "ovrRating" : 76,
      "primaryColor" : 13209,
      "secondaryColor" : 12238529,
      "teamId" : 757727243,
      "userName" : ""
    }, {
      "abbrName" : "MIA",
      "cityName" : "Miami",
      "defScheme" : 9,
      "displayName" : "Dolphins",
      "divName" : "AFC East",
      "injuryCount" : 0,
      "logoId" : 11,
      "nickName" : "Fins",
      "offScheme" : 4,
      "ovrRating" : 77,
      "primaryColor" : 36503,
      "secondaryColor" : 16089632,
      "teamId" : 757727245,
      "userName" : ""
    }, {
      "abbrName" : "NYJ",
      "cityName" : "New York",
      "defScheme" : 11,
      "displayName" : "Jets",
      "divName" : "AFC East",
      "injuryCount" : 2,
      "logoId" : 17,
      "nickName" : "Jets",
      "offScheme" : 3,
      "ovrRating" : 80,
      "primaryColor" : 1846565,
      "secondaryColor" : 15132390,
      "teamId" : 757727252,
      "userName" : ""
    }, {
      "abbrName" : "NE",
      "cityName" : "New England",
      "defScheme" : 8,
      "displayName" : "Patriots",
      "divName" : "AFC East",
      "injuryCount" : 4,
      "logoId" : 21,
      "nickName" : "Pats",
      "offScheme" : 3,
      "ovrRating" : 83,
      "primaryColor" : 5426,
      "secondaryColor" : 13566503,
      "teamId" : 757727258,
      "userName" : ""
    }, {
      "abbrName" : "BUF",
      "cityName" : "Buffalo",
      "defScheme" : 11,
      "displayName" : "Bills",
      "divName" : "AFC East",
      "injuryCount" : 0,
      "logoId" : 2,
      "nickName" : "Bills",
      "offScheme" : 3,
      "ovrRating" : 82,
      "primaryColor" : 13209,
      "secondaryColor" : 13566503,
      "teamId" : 757727236,
      "userName" : ""
    }, {
      "abbrName" : "OAK",
      "cityName" : "Oakland",
      "defScheme" : 8,
      "displayName" : "Raiders",
      "divName" : "AFC West",
      "injuryCount" : 2,
      "logoId" : 22,
      "nickName" : "Raiders",
      "offScheme" : 3,
      "ovrRating" : 82,
      "primaryColor" : 10066329,
      "secondaryColor" : 0,
      "teamId" : 757727259,
      "userName" : ""
    }, {
      "abbrName" : "DEN",
      "cityName" : "Denver",
      "defScheme" : 11,
      "displayName" : "Broncos",
      "divName" : "AFC West",
      "injuryCount" : 2,
      "logoId" : 3,
      "nickName" : "Broncs",
      "offScheme" : 4,
      "ovrRating" : 82,
      "primaryColor" : 13209,
      "secondaryColor" : 14766592,
      "teamId" : 757727237,
      "userName" : ""
    }, {
      "abbrName" : "SD",
      "cityName" : "San Diego",
      "defScheme" : 12,
      "displayName" : "Chargers",
      "divName" : "AFC West",
      "injuryCount" : 3,
      "logoId" : 7,
      "nickName" : "Bolts",
      "offScheme" : 4,
      "ovrRating" : 80,
      "primaryColor" : 33988,
      "secondaryColor" : 16108032,
      "teamId" : 757727241,
      "userName" : ""
    }, {
      "abbrName" : "KC",
      "cityName" : "Kansas City",
      "defScheme" : 11,
      "displayName" : "Chiefs",
      "divName" : "AFC West",
      "injuryCount" : 1,
      "logoId" : 8,
      "nickName" : "Chiefs",
      "offScheme" : 3,
      "ovrRating" : 83,
      "primaryColor" : 10027008,
      "secondaryColor" : 16108032,
      "teamId" : 757727242,
      "userName" : ""
    }, {
      "abbrName" : "DET",
      "cityName" : "Detroit",
      "defScheme" : 9,
      "displayName" : "Lions",
      "divName" : "NFC North",
      "injuryCount" : 1,
      "logoId" : 18,
      "nickName" : "Lions",
      "offScheme" : 2,
      "ovrRating" : 82,
      "primaryColor" : 29372,
      "secondaryColor" : 12896715,
      "teamId" : 757727253,
      "userName" : ""
    }, {
      "abbrName" : "GB",
      "cityName" : "Green Bay",
      "defScheme" : 11,
      "displayName" : "Packers",
      "divName" : "NFC North",
      "injuryCount" : 2,
      "logoId" : 19,
      "nickName" : "Pack",
      "offScheme" : 0,
      "ovrRating" : 86,
      "primaryColor" : 680214,
      "secondaryColor" : 16108032,
      "teamId" : 757727256,
      "userName" : ""
    }, {
      "abbrName" : "MIN",
      "cityName" : "Minnesota",
      "defScheme" : 9,
      "displayName" : "Vikings",
      "divName" : "NFC North",
      "injuryCount" : 3,
      "logoId" : 30,
      "nickName" : "Vikes",
      "offScheme" : 4,
      "ovrRating" : 82,
      "primaryColor" : 4994443,
      "secondaryColor" : 16108032,
      "teamId" : 757727268,
      "userName" : ""
    }, {
      "abbrName" : "CHI",
      "cityName" : "Chicago",
      "defScheme" : 10,
      "displayName" : "Bears",
      "divName" : "NFC North",
      "injuryCount" : 1,
      "logoId" : 0,
      "nickName" : "Bears",
      "offScheme" : 2,
      "ovrRating" : 80,
      "primaryColor" : 726570,
      "secondaryColor" : 15229979,
      "teamId" : 757727234,
      "userName" : ""
    }, {
      "abbrName" : "ATL",
      "cityName" : "Atlanta",
      "defScheme" : 6,
      "displayName" : "Falcons",
      "divName" : "NFC South",
      "injuryCount" : 4,
      "logoId" : 13,
      "nickName" : "Falcons",
      "offScheme" : 0,
      "ovrRating" : 84,
      "primaryColor" : 10027008,
      "secondaryColor" : 0,
      "teamId" : 757727247,
      "userName" : ""
    }, {
      "abbrName" : "CAR",
      "cityName" : "Carolina",
      "defScheme" : 6,
      "displayName" : "Panthers",
      "divName" : "NFC South",
      "injuryCount" : 3,
      "logoId" : 20,
      "nickName" : "Panthers",
      "offScheme" : 3,
      "ovrRating" : 82,
      "primaryColor" : 33988,
      "secondaryColor" : 0,
      "teamId" : 757727257,
      "userName" : ""
    }, {
      "abbrName" : "NO",
      "cityName" : "New Orleans",
      "defScheme" : 9,
      "displayName" : "Saints",
      "divName" : "NFC South",
      "injuryCount" : 2,
      "logoId" : 26,
      "nickName" : "Saints",
      "offScheme" : 4,
      "ovrRating" : 82,
      "primaryColor" : 9866066,
      "secondaryColor" : 0,
      "teamId" : 757727263,
      "userName" : ""
    }, {
      "abbrName" : "TB",
      "cityName" : "Tampa Bay",
      "defScheme" : 6,
      "displayName" : "Buccaneers",
      "divName" : "NFC South",
      "injuryCount" : 1,
      "logoId" : 5,
      "nickName" : "Bucs",
      "offScheme" : 5,
      "ovrRating" : 83,
      "primaryColor" : 13961738,
      "secondaryColor" : 3420203,
      "teamId" : 757727239,
      "userName" : ""
    }, {
      "abbrName" : "DAL",
      "cityName" : "Dallas",
      "defScheme" : 10,
      "displayName" : "Cowboys",
      "divName" : "NFC East",
      "injuryCount" : 1,
      "logoId" : 10,
      "nickName" : "'Boys",
      "offScheme" : 4,
      "ovrRating" : 84,
      "primaryColor" : 13209,
      "secondaryColor" : 14145495,
      "teamId" : 757727244,
      "userName" : ""
    }, {
      "abbrName" : "PHI",
      "cityName" : "Philadelphia",
      "defScheme" : 6,
      "displayName" : "Eagles",
      "divName" : "NFC East",
      "injuryCount" : 2,
      "logoId" : 12,
      "nickName" : "Eagles",
      "offScheme" : 0,
      "ovrRating" : 79,
      "primaryColor" : 1330259,
      "secondaryColor" : 0,
      "teamId" : 757727246,
      "userName" : ""
    }, {
      "abbrName" : "NYG",
      "cityName" : "New York",
      "defScheme" : 6,
      "displayName" : "Giants",
      "divName" : "NFC East",
      "injuryCount" : 1,
      "logoId" : 15,
      "nickName" : "G-Men",
      "offScheme" : 0,
      "ovrRating" : 79,
      "primaryColor" : 13209,
      "secondaryColor" : 12519994,
      "teamId" : 757727249,
      "userName" : ""
    }, {
      "abbrName" : "WAS",
      "cityName" : "Washington",
      "defScheme" : 7,
      "displayName" : "Redskins",
      "divName" : "NFC East",
      "injuryCount" : 1,
      "logoId" : 25,
      "nickName" : "Skins",
      "offScheme" : 4,
      "ovrRating" : 80,
      "primaryColor" : 4132880,
      "secondaryColor" : 16108032,
      "teamId" : 757727262,
      "userName" : ""
    }, {
      "abbrName" : "SF",
      "cityName" : "San Francisco",
      "defScheme" : 12,
      "displayName" : "49ers",
      "divName" : "NFC West",
      "injuryCount" : 1,
      "logoId" : 14,
      "nickName" : "Niners",
      "offScheme" : 5,
      "ovrRating" : 89,
      "primaryColor" : 10027008,
      "secondaryColor" : 13283702,
      "teamId" : 757727232,
      "userName" : "MichaelBrazell"
    }, {
      "abbrName" : "LA",
      "cityName" : "Los Angeles",
      "defScheme" : 6,
      "displayName" : "Rams",
      "divName" : "NFC West",
      "injuryCount" : 4,
      "logoId" : 23,
      "nickName" : "Rams",
      "offScheme" : 4,
      "ovrRating" : 81,
      "primaryColor" : 5426,
      "secondaryColor" : 13283702,
      "teamId" : 757727260,
      "userName" : "Nickwtf"
    }, {
      "abbrName" : "SEA",
      "cityName" : "Seattle",
      "defScheme" : 6,
      "displayName" : "Seahawks",
      "divName" : "NFC West",
      "injuryCount" : 4,
      "logoId" : 27,
      "nickName" : "'Hawks",
      "offScheme" : 0,
      "ovrRating" : 85,
      "primaryColor" : 5426,
      "secondaryColor" : 2864177,
      "teamId" : 757727264,
      "userName" : ""
    }, {
      "abbrName" : "ARI",
      "cityName" : "Arizona",
      "defScheme" : 10,
      "displayName" : "Cardinals",
      "divName" : "NFC West",
      "injuryCount" : 2,
      "logoId" : 6,
      "nickName" : "Cards",
      "offScheme" : 2,
      "ovrRating" : 80,
      "primaryColor" : 10027008,
      "secondaryColor" : 0,
      "teamId" : 757727240,
      "userName" : ""
    } ]

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
