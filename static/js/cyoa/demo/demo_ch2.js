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
    paragraph : function(){return "The end!"},
    choices : function(){},
    special_choices : function(){},
}