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
    special_choices : function(){return{"I choose Octarine!" : function(){last_answer = "d"}};},
    next_choice : function()
    {
        return "_2";
    }
}

chapter_1._2 = {
    paragraph : function()
    {
        var colour;
        if(last_answer === "a"){
            colour = "red";
        }
        else if(last_answer === "b"){
            colour = "green";
        }
        else if(last_answer === "c"){
            colour = "blue";
        }
        else{
            return "Wow - you must be a wizard! Well, that's all for now - I hope you enjoyed this demo.";
        }
        return "Wow, I love "+colour+" too! Well, that's all for now - I hope you enjoyed this demo.";
    },
    choices : function(){},
    special_choices : function(){},
}