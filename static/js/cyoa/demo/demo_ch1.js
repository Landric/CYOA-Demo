////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//demo_ch1.js                                                                 //
//"Chapter 1" of the choose your own adventure demo                           //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

var last_answer;

var chapter_1 = new Object();

chapter_1._0 = {
    paragraph : function(){return "Hi there! This is a short demo showcasing some of the possibilities of this CYOA framework!"},
    choices : function(){return {"Continue" : function(){}}},
    special_choices : function(){},
    next_choice : function()
    {
        return "_1";
    }
}

chapter_1._1 = {
    paragraph : function(){return "Let's get started! What's your favourite colour?"},
    choices : function(){return {"Red" : function(){last_answer = "a"}, "Green" : function(){last_answer = "b"}, "Blue" : function(){last_answer = "c"}}},
    special_choices : function(){},
    next_choice : function()
    {
        return "_2";
    }
}

chapter_1._2 = {
    paragraph : function()
    {
        //Yes, this could be simplified by using "favourite_colour" instead of "last_answer", but
        //this demonstrates how to refer to the previous answer without storing it as a stat
        if(last_answer === "a"){
            favourite_colour = "red";
        }
        else if(last_answer === "b"){
            favourite_colour = "green";
        }
        else if(last_answer === "c"){
            favourite_colour = "blue";
        }
        return "Wow, I love "+favourite_colour+" too! Now lets have a look at your stats!";
    },
    choices : function(){return {"Continue" : function(){}}},
    special_choices : function(){},
    next_choice : function()
    {
        return 2;
    }
}