$(document).ready(function() {

let score = 0

$('#questionOne').hide();
$('#questionTwo').hide();
$('#questionThree').hide();
$('#questionFour').hide();


$('#takeTheQuiz').click(function() {
  $('#takeTheQuiz').hide();
  $('#questionOne').fadeIn(1000);
});

$('#questionOne').click(function() {
  $('#questionOne').fadeOut(100);
  $('#questionTwo').fadeIn(1000);
});

$('#questionTwo').click(function() {
  $('#questionTwo').fadeOut(100);
  $('#questionThree').fadeIn(1000);
});

$('#questionThree').click(function() {
  $('#questionThree').fadeOut(100);
  $('#questionFour').fadeIn(1000);
});

  $('#q1o1').click(function() {
    console.log('clicked q1o1');
  });








});