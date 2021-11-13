$(document).ready(function() {

let score = 0

$('#questionOne').hide();
$('#questionTwo').hide();
$('#questionThree').hide();
$('#questionFour').hide();
$('#questionFive').hide();
$('.results').hide();

$('#takeTheQuiz').click(function() {
  $('#takeTheQuiz').fadeOut(100);
  $('#questionOne').fadeIn(1000);
  $('#q1o1').click(function() {
    score++;
    console.log('Score: ', score);
  });
  $('#q1o2').click(function() {
    score = score + 2;
    console.log('Score: ', score);
  });
  $('#q1o3').click(function() {
    score = score + 3;
    console.log('Score: ', score);
  });
  $('#q1o4').click(function() {
    score = score + 4;
    console.log('Score: ', score);
  });
});

$('#questionOne').click(function() {
  $('#questionOne').fadeOut(100);
  $('#questionTwo').fadeIn(1000);
  $('#q2o1').click(function() {
    score++;
    console.log('Score: ', score);
  });
  $('#q2o2').click(function() {
    score = score + 2;
    console.log('Score: ', score);
  });
  $('#q2o3').click(function() {
    score = score + 3;
    console.log('Score: ', score);
  });
  $('#q2o4').click(function() {
    score = score + 4;
    console.log('Score: ', score);
  });
});

$('#questionTwo').click(function() {
  $('#questionTwo').fadeOut(100);
  $('#questionThree').fadeIn(1000);
  $('#q3o1').click(function() {
    score++;
    console.log('Score: ', score);
  });
  $('#q3o2').click(function() {
    score = score + 2;
    console.log('Score: ', score);
  });
  $('#q3o3').click(function() {
    score = score + 3;
    console.log('Score: ', score);
  });
  $('#q3o4').click(function() {
    score = score + 4;
    console.log('Score: ', score);
  });
});

$('#questionThree').click(function() {
  $('#questionThree').fadeOut(100);
  $('#questionFour').fadeIn(1000);
  $('#q4o1').click(function() {
    score++;
    console.log('Score: ', score);
  });
  $('#q4o2').click(function() {
    score = score + 2;
    console.log('Score: ', score);
  });
  $('#q4o3').click(function() {
    score = score + 3;
    console.log('Score: ', score);
  });
  $('#q4o4').click(function() {
    score = score + 4;
    console.log('Score: ', score);
  });
});

// survey form
$('#questionFour').click(function() {
  $('#questionFour').fadeOut(100);
  $('#questionFive').fadeIn(1000);


  $("form#userInfo").submit(function(event){
    event.preventDefault();
    $('#questionFive').fadeOut(100);
    $('.results').fadeIn(1000);
    const name = $("#userName").val();
    const age = $("#userAge").val();
    console.log('User name is: ', name);
    console.log('User age is: ', age);
    // // biz logic
    // $("#total-count").html(wordCounter(passage));
    // $("#selected-count").html(numberOfOccurrencesInText(word, passage));
    // // ui logic
    // $('#bolded-passage').html(boldPassage(word, passage));
  });


  // const python = (name, age) => {
  //   `${name}!  Your preferences indicate that Python${}`
  // };


});


});