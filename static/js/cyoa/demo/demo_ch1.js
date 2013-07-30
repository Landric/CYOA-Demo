////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//demo_ch1.js                                                                 //
//"Chapter 1" of the choose your own adventure demo                           //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

var chapter_1 = new Object();

chapter_1._1 = {
    paragraph : "Hi there! Let's get started - what's your favourite colour?",
    choices : {"Red" : function(){alert("Red!")}, "Green" : function(){alert("Green!")}, "Blue" : function(){alert("Blue!")}},
    special_choices : {"I choose Octarine!" : function(){alert("Wizard!")}}
}