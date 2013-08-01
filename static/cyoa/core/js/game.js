////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//game.js                                                                     //
//UI (including transitions, etc.) for the cyoa game                          //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

//As soon as we know js is enabled, remove the "No JS" warning
$('#no-js').remove();

//Declare all the required variables
var current_chapter;
var current_choice;
var last_answer;

$(document).ready(function(){
    
    //Create a bootstrap row, to hold the control sidebar and main container
    var row = $('<div class="row">');
    $('#content').append(row);
    
    //Initialise the stats (some of which are shown in the sidebar)
    initialiseStats();
    
    //Create a sidebar, to display location, date and controls
    var controls = $('<div class="span2" id="controls">');
    controls.append($('<p>Location: '+loc+'</p>'));
    controls.append($('<p>Date: '+date+'</p>'));
    controls.append($('<p>Time: '+time+'</p>'));
    controls.append($('<a class="btn" id="show-stats">Stats</a>&nbsp;&nbsp;<a class="btn" role="button" data-toggle="modal" href="#confirmRestart">Restart</a>'));
    row.append(controls);
    
    //Set up a confirmation modal for the Restart button
    $('#content').append($('<div id="confirmRestart" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true">'+
        '<div class="modal-body">'+
            '<p>Are you sure you want to restart from the beginning? This will delete all of your progress so far!</p>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>'+
        '<button id="restart" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Restart</button>'+
    '</div>'));
    
    $('#restart').click(initialiseGame);
    
    //Display stats
    function displayBarStat(stat)
    {
        var stat_row = $('<div class="row">');
        
        var bar_div = $('<div class="span6 bar-div">');
        bar_div.append($('<div class="empty-bar span6">'));
        bar_div.append($('<div class="stat-bar '+stat['class']+'" id="'+stat['id']+'">').width(Math.round(parseFloat(bar_div.width()) * (parseFloat(stat['value'])/100.0))));
        bar_div.append($('<p class="stat-label">'+stat['value']+'% </p>'));
 
        stat_row.append($('<div class="span2"><p>'+stat['name']+': </p></div>'));
        stat_row.append(bar_div);
        
        return stat_row;
    }
    
    $('#show-stats').click(function(){
        var stat_div = $('<div class="span10" id="stat-panel">');
    
        var stats = statsToDisplay();
        
        //Add percentage stats
        for(var i=0; i < stats.percentageStats.length; i++){
            stat_div.append(displayBarStat(stats.percentageStats[i]));
        }
        
        //Add any other stats
        
        //Add a "Continue" button which destroys the stat_div
        stat_div.append($('<button class="btn">Continue</button>').click(function(){
            stat_div.fadeOut(500, function(){
                stat_div.remove();
                row.fadeIn(500);
            });
        }));
        
        //Finally, hide the current choice and display stats
        stat_div.hide();
        $('#content').append(stat_div);
        row.fadeOut(500, function(){stat_div.fadeIn(500);});
    });
    
    //Create a container for the choices to be displayed in
    var container = $('<div class="span8 lead" id="main">').hide();
    row.append(container);
    
    function consequenceCallback(consequence)
    {
        return function()
        {
            consequence();
            container.fadeOut(500, function()
            {
                container.empty();
                var next = current_choice.next_choice();
                if(/^\d+$/.test(next))
                {
                    current_chapter = "_"+next;
                    displayChoice(chapter_index[current_chapter]._1);
                }
                else{
                    displayChoice(chapter_index[current_chapter][next]);
                }
            });
        }
    }
    
    function displayChoice(choice)
    {
        current_choice = choice;

        var paragraph = choice.paragraph(), choices = choice.choices(), special_choices = choice.special_choices();
        
        paragraph = '<br/><p>'+paragraph+'</p><br/>';
        var final_choices = new Object();
        
        for (choice in choices) {
            final_choices['<div class="span6 choice"><p>'+choice+'</p></div>'] = choices[choice];
        }
        
        for (choice in special_choices) {
            final_choices['<div class="span6 choice special-choice"><p>'+choice+'</p></div>'] = special_choices[choice];
        }
        
        container.append($(paragraph));
        
        for (choice in final_choices) {
            container.append($(choice).click(consequenceCallback(final_choices[choice])));
        }

        container.fadeIn(500);
    }
    
    function initialiseGame()
    {
        if (container.children().length > 0){
            container.fadeOut(500, function(){
                container.empty();
                initialiseStats();
                current_chapter = "_1";
                current_choice = chapter_index[current_chapter]._0;
                displayChoice(current_choice);
            });
        }
        else{
            current_chapter = "_1";
            current_choice = chapter_index[current_chapter]._0;
            displayChoice(current_choice);
        }
    }
    
    initialiseGame();
});