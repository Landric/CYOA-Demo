$(document).ready(function(){
    $('#no-js').remove();
    
    var container = $('<div class="span10 lead" id="main">').hide();
    container.append($('<br/><p>Hi there! Let\'s get started - what\'s your favourite colour?</p><br/>'));
    container.append($('<div class="span8 choice"><p>Red</p></div>'));
    container.append($('<div class="span8 choice"><p>Green</p></div>'));
    container.append($('<div class="span8 choice"><p>Blue</p></div>'));
    container.append($('<div class="span8 choice special-choice"><p>I choose Octarine!</p></div>'));
    $('#content').append(container);
    container.fadeIn(1500);
});