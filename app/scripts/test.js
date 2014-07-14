$(document).ready(function () { 
  $('.btn-start-test').click(function () {
        $('.logo-wrapper').toggle();
        $('.header').toggle();
        $('.checklist-row').toggle();
        $('.test-wrapper').toggle();
    });
  $('#intro-next').click(function () {
        $('#step-intro').toggleClass("hide");
        $('#step-screen').toggleClass("hide");
        $('.test-progress').show();
    });
   $('#screen-next').click(function () {
        $('#step-screen').toggleClass("hide");
        $('#step-mic').toggleClass("hide");
        $('#screen-status').toggleClass("hide");
    });
    $('#btn-mic-issues').click(function () {
        $('#step-mic').toggleClass("hide");
        $('#step-speakers').toggleClass("hide");
        $('#mic-status').toggleClass("hide");
    });
    $('#btn-canhear').click(function () {
        $('#step-cams').toggleClass("hide");
        $('#step-speakers').toggleClass("hide");
        $('#mic-status').toggleClass("hide");
    });
    $('#btn-webcam-issues').click(function () {
        $('.test-mobile-col').toggleClass("hide");
        $('#cams-title').text("Mobile Cam");
        $('#webcam-step-col').toggleClass("hide");
        $('#btn-webcam-issues').toggleClass("hide");
        $('#mobile-step-col').toggleClass("hide");
    });
    $('#btn-skip-test').click(function () {
        $('#cams-title').text("Test Success");
        $('#mobile-step-col').toggleClass("hide");
        $('#btn-mobile-issues').toggleClass("hide");
        $('#end-step').toggleClass("hide");
    });
    $('#end-test').click(function () {
        $('#step-cams').toggleClass("hide");
        $('#test-fail').toggleClass("hide");
        $('.test-wrapper').addClass("screen-instructions");
    });
    $('#btn-contact').click(function () {
        $('.errors').toggleClass("hide");
        $('.contact').toggleClass("hide");
    });
});