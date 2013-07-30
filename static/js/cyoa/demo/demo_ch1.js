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

chapter_1._0 = {
    paragraph : "Hi there! This is a short demo showcasing some of the possibilities of this CYOA framework!",
    choices : {"Continue" : function(){}},
    next_choice : function()
    {
        return "_1";
    }
}

chapter_1._1 = {
    paragraph : "Let's get started! What's your favourite colour?",
    choices : {"Red" : function(){alert("Red!")}, "Green" : function(){alert("Green!")}, "Blue" : function(){alert("Blue!")}},
    special_choices : {"I choose Octarine!" : function(){alert("Wizard!")}},
    next_choice : function()
    {
        return "_2";
    }
}

chapter_1._2 = {
    paragraph : "Mine too! Well, that's all for now - I hope you enjoyed this demo.",
}