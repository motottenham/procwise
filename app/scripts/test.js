$(document).ready(function () { 
  $('.start-test').click(function () {
    $('.logo-wrapper').toggle();
    $('.header').toggle();
    $('.checklist-row').toggle();
    $('.test-wrapper').toggle();
    });
  $('.real-start-test').click(function () {
    $('.test-notes').hide();
    $('.test-title').text("Screen sharing");
    $('.test-description').text("Let's check if we can see your screen. That's it, you can sit back and relax! We got it from here. The test will take less than a minute.");
    });
});