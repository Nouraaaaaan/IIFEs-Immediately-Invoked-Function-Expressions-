
//------------------------------------------IIFEs------------------------------------------------------------------------------//

function game()
{
    var score = Math.random() * 10 ;
    console.log(score);
}
game();

//IIFS
(
    function () 
    {
      var score = Math.random() * 10 ;
      console.log(score);
    }

)();

//Passing Argumnet to IIEF
(
    function (value) 
    {
      var score = Math.random() * 10 ;
      console.log(value - score);
    }

)(5);