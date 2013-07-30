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
    
    //Create a container for the choices to be displayed in
    var container = $('<div class="span10 lead" id="main">').hide();
    $('#content').append(container);
    
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
            final_choices['<div class="span8 choice"><p>'+choice+'</p></div>'] = choices[choice];
        }
        
        for (choice in special_choices) {
            final_choices['<div class="span8 choice special-choice"><p>'+choice+'</p></div>'] = special_choices[choice];
        }
        
        container.append($(paragraph));
        
        for (choice in final_choices) {
            container.append($(choice).click(consequenceCallback(final_choices[choice])));
        }
        
        container.fadeIn(500);
    }
    
    current_chapter = "_1";
    current_choice = chapter_index[current_chapter]._0;
    displayChoice(current_choice);
});