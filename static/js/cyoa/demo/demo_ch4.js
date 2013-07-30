////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//demo_ch4.js                                                                 //
//"Chapter 4" of the choose your own adventure demo                           //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

var last_answer;

var chapter_4 = new Object();

chapter_4._1 = {
    paragraph : function(){return "The end!"},
    choices : function(){},
    special_choices : function(){},
}