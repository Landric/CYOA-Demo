////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//game.js                                                                     //
//Core mechanics (i.e. UI display) of the cyoa game                           //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

//As soon as we know js is enabled, remove the "No JS" warning
$('#no-js').remove();

//Declare all the required variables
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
            container.fadeOut(700, function()
            {
                container.empty();
                displayChoice(chapter_1[current_choice.next_choice()])
            });
        }
    }
    
    function displayChoice(choice)
    {
        current_choice = choice;
        
<<<<<<< HEAD
        var paragraph = choice.paragraph(), choices = choice.choices(), special_choices = choice.special_choices();
=======
        var paragraph = choice.paragraph(), choices = choice.choices, special_choices = choice.special_choices;
>>>>>>> 0d422f7d1eff26a2c270dd004d708c9fc19d3d6c
        
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
        
        container.fadeIn(1500);
    }
    
    current_choice = chapter_1._0;
    displayChoice(current_choice);
});