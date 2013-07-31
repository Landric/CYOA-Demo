////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//demo_stats.js                                                               //
//Player stats (e.g. Str, Dex, Int) used in the demo                          //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

//Sidebar info
var loc, date, time;

//Numerical stats
var str, dex, intel;

//Other info
var player_name, favourite_colour;

//Initialise/Restart
function initialiseStats()
{
    //Sidebar info
    loc = "Deep space";
    date = "The future";
    time = "Teatime";
    
    //Numerical stats
    str = 50;
    dex = 50;
    intel = 50;
    
    //Other info
    player_name = null;
    favourite_colour = null;
}

//Return the stats to be displayed (some stats are kept secret)
function statsToDisplay()
{
    return {percentageStats : {"Strength" : str, "Dexterity": dex, "Intelligence" : intel}};
}