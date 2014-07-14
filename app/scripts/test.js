$(document).ready(function () { 
  $('.start-test').click(function () {
    $('.logo-wrapper').toggle();
    $('.header').toggle();
    $('.checklist-row').toggle();
    $('.test-wrapper').toggle();
    });
  $('#start-test').click(function () {
    $(this).toggleClass("hide");
    $('#screen-notworking').toggleClass("hide");
    $('.test-notes').empty().append('<div class="screen-feed"></div>');
    $('.test-title').text("Screen sharing");
    $('.test-description').text("Let's check if we can see your screen.");
    $('.test-progress').show();
    });
   $('#screen-notworking').click(function () {
    $(this).toggleClass("hide");
    $('#mic-notworking').toggleClass("hide");
    $('#screen-check').toggleClass("hide");
    $('.test-notes').empty().append('<h1>Say Something</h1>');
    $('.test-title').text("Microphone");
    $('.test-description').text("Let's check if your microphone works.");
    });
});