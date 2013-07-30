////////////////////////////////////////////////////////////////////////////////
//CYOA Demo                                                                   //
////////////////////////////////////////////////////////////////////////////////
//utils.js                                                                    //
//Additional mechanics used by the core cyoa framework                        //
////////////////////////////////////////////////////////////////////////////////
//Author: Tom Blount                                                          //
//Date: 30/07/2013                                                            //
////////////////////////////////////////////////////////////////////////////////

function scalingAddition(a, b)
{
    return (a + (100-a)*(b/100));
}

function scalingSubtraction(a, b)
{
    return (a - a*(b/100));
}