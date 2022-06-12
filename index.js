// code your solution here
function superbowlWin(objArr)
{
    let firstWin
    objArr.find(function(obj) {
        if (obj.result === "W")
        {
         firstWin = obj.year
         return firstWin;
        }
    })
    return firstWin
}         