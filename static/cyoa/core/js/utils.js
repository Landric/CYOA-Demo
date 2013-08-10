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

function tinyIncrease(stat)
{
    return scalingAddition(stat, 5);
}

function smallIncrease(stat)
{
    return scalingAddition(stat, 10);
}

function moderateIncrease(stat)
{
    return scalingAddition(stat, 20);
}

function largeIncrease(stat)
{
    return scalingAddition(stat, 30);
}

function hugeIncrease(stat)
{
    return scalingAddition(stat, 40);
}

function tinyDecrease(stat)
{
    return scalingSubtraction(stat, 5);
}

function smallDecrease(stat)
{
    return scalingSubtraction(stat, 10);
}

function moderateDecrease(stat)
{
    return scalingSubtraction(stat, 20);
}

function largeDecrease(stat)
{
    return scalingSubtraction(stat, 30);
}

function hugeDecrease(stat)
{
    return scalingSubtraction(stat, 40);
}