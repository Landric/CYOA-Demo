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
    paragraph : function(){return "The end!"},
    choices : function(){},
    special_choices : function(){},
}