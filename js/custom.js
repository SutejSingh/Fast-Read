

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();


  /* Back top
  -----------------------------------------------*/
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })

 /* Init pdf.js*/     

 

/* Custom Read */

function waitforme(milisec) {
  return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milisec);
  })
}

async function changeVals(jsSecs, array) {
  var currWordIndex = 0;
  var quitLoop = false;
  for(var i = 0; i < array.length; i++){
    document.getElementById("outText").innerHTML = array[i];
    console.log(document.getElementById("outText").innerHTML);
    console.log(array[i]);

    await waitforme(jsSecs);
    currWordIndex++;
    console.log(currWordIndex);

    $(".Quit").click(function(){
      document.getElementById("result").style.display = "none";
      quitLoop = true;
    });

    if(quitLoop){
      break;
    }
  }
  console.log("Loop execution finished!)");
}

$(document).ready(function() {

  // Set default value of Slider text input
  $("#amount").val(120);

  $("#SubmitBtn").click(function(){
    var wpm = $("#amount").val();

    var text = $("#textIn").val();
    wordsArr = text.split(/(\s+)/);

    for(var i = 0; i < wordsArr.length; i++){
      if(wordsArr[i] == " " || wordsArr[i] == "   "){
        wordsArr.splice(i,1);
      }
    }

    console.log(text);
    console.log(wordsArr);

    document.getElementById("result").style.display = "block";

    var jsSecs = (60*1000/wpm);

    var lmao = changeVals(jsSecs, wordsArr);

    $(".Quit").click(function(){
      document.getElementById("result").style.display = "none";
      quitLoop = true;
    });

  });
  



  // const $valueSpan = $('.valueSpan');
  // const $value = $('#slider');
  // $valueSpan.html($value.val());
  // $value.on('input change', () => {

  //   $valueSpan.html($value.val());
  // });

  
});