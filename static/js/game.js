$('#no-js').remove();

$(document).ready(function(){

    //Code adapted from http://bost.ocks.org/mike/shuffle/
    function shuffle(array)
    {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex)
        {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    
    function createCallback(consequence){
        return function(){
            consequence();
            container.fadeOut(700, container.empty);
        }
    }
    
    function displayChoices(container, paragraph, choices, special_choices)
    {
        paragraph = '<br/><p>'+paragraph+'</p><br/>';
        var final_choices = new Object();
        
        for (choice in choices) {
            final_choices['<div class="span8 choice"><p>'+choice+'</p></div>'] = choices[choice];
        }
        
        for (choice in special_choices) {
            final_choices['<div class="span8 choice special-choice"><p>'+choice+'</p></div>'] = special_choices[choice];
        }
        
        container.append($(paragraph));
        //shuffle(final_choices);
        
        for (choice in final_choices) {
            container.append($(choice).click(createCallback(final_choices[choice])));
        }
        
        container.fadeIn(1500);
    }
    
    var container = $('<div class="span10 lead" id="main">').hide();
    $('#content').append(container);
    
    var paragraph = "Hi there! Let's get started - what's your favourite colour?"
    var choices = {"Red" : function(){alert("Red!")}, "Green" : function(){alert("Green!")}, "Blue" : function(){alert("Blue!")}};
    var special_choices = {"I choose Octarine!" : function(){alert("Wizard!")}};
    displayChoices(container, paragraph, choices, special_choices);
});