$(document).ready(function(){

   $('#homescreen').show();
   $('#game1screen').hide();
   $('#game2screen').hide();
   $('#aboutscreen').hide();
   $('#contactscreen').hide();


   //show homescreen
    $('#home').onTap(function(){
    $('#homescreen').show();
    $('#game1screen').hide();
    $('#game2screen').hide();
    $('#aboutscreen').hide();
    $('#contactscreen').hide();
    })

     // Show game1 Screen
     $('#game1').onTap(function(){
     $('#homescreen').hide();
     $('#game1screen').show();
     $('#game2screen').hide();
     $('#aboutscreen').hide();
     $('#contactscreen').hide();
     })

     // Show game2 Screen
     $('#game2').onTap(function(){
     $('#homescreen').hide();
     $('#game1screen').hide();
     $('#game2screen').show();
     $('#aboutscreen').hide();
     $('#contactscreen').hide();
     })


     // Show About Screen
     $('#about').onTap(function(){
     $('#homescreen').hide();
     $('#game1screen').hide();
     $('#game2screen').hide();
     $('#aboutscreen').show();
     $('#contactscreen').hide();

     })

     // Show Contact
     $('#contact').onTap(function(){
    $('#homescreen').hide();
     $('#game1screen').hide();
     $('#aboutscreen').hide();
     $('#contactscreen').show();

     })

   // Show Timer1
    $(function(){
   	$("#timer1").countdowntimer({
   	seconds : 60
   	});
    });

// Show Timer1
    $(function(){
   	$("#timer2").countdowntimer({
   	seconds : 90
   	});
    });

    //Select correct answer Game 1
      $('#game1answers').onTap(function(){
       if(document.getElementById('game1question1').value=="saw" &&
        document.getElementById('game1question2').value=="use" &&
        document.getElementById('game1question3').value=="were"&&
        document.getElementById('game1question4').value=="down")
       alert(' Congratulation You Win !! Game 2 Unlocked !!!');
       else {
      alert('Please try again to unlock next level!!!');
       }
      })

  //Select correct answer Game 2

      $('#game2answers').onTap(function(){
        var ans1 = $('#g2a1').val();
        var ans2 = $("#g2a2").val();
        var ans3 = $("#g2a3").val();
        var ans4 = $("#g2a4").val();
        if(ans1=="him" && ans2=="us"&& (ans3=="I"||"i")&&ans4=="you"){
        window.alert("Congratulation !!! You WIN ");
        }else {
        window.alert("Sorry , Try again !!!");
        }
      })

   })
