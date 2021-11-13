$(document).ready(function() {

  // Biz Logic

  let score = 0;

  const ruby = (name, age) => {
    return `<p>${name}!  Your preferences indicate that Ruby might be the best place to start.  Plus, at ${age} years of age, now is the perfect time!</p> <p>Go <a href='https://www.ruby-lang.org/en/' target='_blank'>here</a> to learn more about Ruby!</p>`
  };

  const javaScript = (name, age) => {
    return `<p>${name}!  Your preferences indicate that Javascript would suit you well!  Plus, at ${age} years of age, now is the perfect time!</p><p>Go <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>here</a> to learn more about Javascript!</p>`
  };

  const python = (name, age) => {
    return `<p>${name}!  Your preferences indicate that Python is the best language for you!  Plus, at ${age} years of age, now is the perfect time!</p><p>Go <a href='https://www.python.org/' target='_blank'>here</a> to learn more about Python!</p>`
  };

  const cSharp = (name, age) => {
    return `<p>Excellent choice, ${name}!  Your preferences indicate that C# would be a good fit for you!  Plus, at ${age} years of age, now is the perfect time!</p><p>Go <a href='https://www.python.org/' target='_blank'>here</a> to learn more about Python!</p>`
  };

// UI Logic
  $('#questionOne').hide();
  $('#questionTwo').hide();
  $('#questionThree').hide();
  $('#questionFour').hide();
  $('#questionFive').hide();
  $('#results').hide();
  $('#reload').hide();

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

  const decider = (score, name, age) => {
    if (score >= 3) {
      return ruby(name, age);
    } else if (score >=4 || score <= 7) {
      return javaScript(name, age);
    } else if (score >= 8 || score <= 11) {
      return python(name, age);
    } else {
      return cSharp(name, age);
    }
  };

  // survey form
  $('#questionFour').click(function() {
    $('#questionFour').fadeOut(100);
    $('#questionFive').fadeIn(1000);

    $("form#userInfo").submit(function(event){
      event.preventDefault();
      $('#questionFive').fadeOut(100);
      $('#results').fadeIn(1000);
      const name = $("#userName").val();
      const age = $("#userAge").val();
      console.log('User name is: ', name);
      console.log('User age is: ', age);
      // biz logic
      let result = decider(score, name, age);
      $("#result").html(result);
      $('#reload').show();
      $('#reload').click(function() {
        location.reload();
    });
    });


  });


});