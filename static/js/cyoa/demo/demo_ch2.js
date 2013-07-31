////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//demo_ch2.js                                                                 //
//"Chapter 2" of the choose your own adventure demo                           //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

var last_answer;

var chapter_2 = new Object();

chapter_2._1 = {
    paragraph : function(){return "Stats represent aspects of your character, and they help you solve problems.\nIn this demo "+
    "there are three stats: Strength, Dexterity and Intelligence."},
    choices : function()
    {
        return {
            "Go to the gym and train STRENGTH" : function(){last_answer = "a"; str = moderateIncrease(str);},
            "Go to the park and train DEXTERITY" : function(){last_answer = "b"; dex = moderateIncrease(dex);},
            "Got to the library and train INTELLIGENCE" : function(){last_answer = "c"; intel = moderateIncrease(intel);},
            "Don't bother - sit and watch TV" : function(){
                last_answer = "d";
                str = moderateDecrease(str);
                dex = moderateDecrease(dex);
                intel = moderateDecrease(intel);
            }
        };
    },
    special_choices : function(){},
    next_choice : function()
    {
        return "_2";
    }
}

chapter_2._2 = {
    paragraph : function()
    {
        var outcome;
        switch(last_answer)
        {
            case "a": outcome = "You feel stronger already.</p><p>And it's a good thing too, "; break;
            case "b": outcome = "You feel faster already.</p><p>And it's a good thing too, "; break;
            case "c": outcome = "You feel smarter already.</p><p>And it's a good thing too, "; break;
            default: outcome = "You feel lazy.</p><p>Well, if you're sure... That might've been a mistake though, ";
        }
        return outcome + "because suddenly a hideous orc brandishing an axe leaps out of a bush!";
    },
    choices : function()
    {
        return {"Run away!" : function(){last_answer = "a"}};
    },
    special_choices : function()
    {
        var s_choices = new Object();
        if(str > 50){
            s_choices["Punch the orc right in the face!"] = function(){last_answer = "b"};
        }
        if(dex > 50){
            s_choices["Dart around the orc and hit him from behind!"] = function(){last_answer = "c"};
        }
        if(intel > 50){
            s_choices["Enter into a frank discussion with the orc about the unsustainability of the bandit paradigm"] = function(){last_answer = "d"};
        }
        return s_choices;
    },
    next_choice : function()
    {
        return "_3";
    }
}

chapter_2._3 = {
    paragraph : function()
    {
        if(last_answer === "a"){
            return "Phew! That was close! But it might not work next time - consider improving your stats in future, then you can play to your strengths and avoid your weaknesses.";
        }
        else{
            return "Yeah! That showed him! See how important stats can be? Try to play to your strengths and avoid your weaknesses.";
        }
    },
    choices : function(){return {"Continue" : function(){}};},
    special_choices : function(){},
    next_choice : function()
    {
        return 3;
    }
}