////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//demo_ch3.js                                                                 //
//"Chapter 3" of the choose your own adventure demo                           //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

var last_answer;

var chapter_3 = new Object();

chapter_3._1 = {
    paragraph : function(){return "You come to a fork in the road. Down one path lies one set of choices - down the other may be a completely different set!"},
    choices : function(){return {"Go left" : function(){last_answer = "a"}, "Go right" : function(){last_answer = "b"}};},
    special_choices : function(){},
    next_choice : function()
    {
        if(last_answer === "a"){
            return "_2";
        }
        else{
            return "_3";
        }
    }
}

chapter_3._2 = {
    paragraph : function(){return "You wander down the road for some way before stopping in a clearing full of flowers."+
        "</p><p>Remember, on your next playthrough, you can try a different route!"},
    choices : function(){return {"Ignore them" : function(){last_answer = "a";}};},
    special_choices : function(){
        var s_choice = new Object();
        s_choice["Pick a "+favourite_colour+" flower. Did you think I'd forgotten that was your favourite?"] = function(){last_answer = "b";};
        return s_choice;
    },
    next_choice : function()
    {
        return 4;
    }
}

chapter_3._3 = {
    paragraph : function(){return "You follow the for for a while, and eventually come across a large sign.</p>"+
        "<p><bold>'HELLO "+player_name+"!'</bold></p><p>Remember, on your next playthrough, you can try a different route!"},
    choices : function(){return {"Follow the road" : function(){last_answer = "a"}};},
    special_choices : function(){},
    next_choice : function()
    {
        return 4;
    }
}