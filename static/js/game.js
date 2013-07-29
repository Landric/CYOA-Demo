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
    
    function displayChoices(container, paragraph, choices, special_choices)
    {
        container.fadeOut(700);
        container.empty();
        
        paragraph = '<br/><p>'+paragraph+'</p><br/>';
        var final_choices = new Array();
        
        var length = choices.length,
        element = null;
        for (var i = 0; i < length; i++) {
            element = choices[i];
            final_choices.push('<div class="span8 choice"><p>'+element+'</p></div>');
        }
        
        var length = special_choices.length,
        element = null;
        for (var i = 0; i < length; i++) {
            element = special_choices[i];
            final_choices.push('<div class="span8 choice special-choice"><p>'+element+'</p></div>');
        }
        
        container.append($(paragraph));
        shuffle(final_choices);
        
        var length = final_choices.length,
        element = null;
        for (var i = 0; i < length; i++) {
            element = final_choices[i];
            container.append($(element));
        }
        
        container.fadeIn(1500);
    }
    
    $('#no-js').remove();
    var container = $('<div class="span10 lead" id="main">').hide();
    $('#content').append(container);
    
    var paragraph = "Hi there! Let's get started - what's your favourite colour?"
    var choices = ["Red", "Green", "Blue"];
    var special_choices = ["I choose Octarine!"];
    displayChoices(container, paragraph, choices, special_choices);
});

