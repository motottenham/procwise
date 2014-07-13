$(document).ready(function () {
  $('#mytooltip').tooltip();
  resizeProctorFeed();
  var proctor = document.querySelector("#proctor-feed");
  var student = document.querySelector("#student-cam");
  var mobile = document.querySelector("#mobile-cam");
  startVideo(proctor);
  //startVideo(student);
  //startVideo(mobile);
})

function startVideo(video) {
    //var video = document.querySelector("#proctor-cam");

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: true
        }, handleVideo, videoError);
    }

    function handleVideo(stream) {
        video.src = window.URL.createObjectURL(stream);
    }

    function videoError(e) {
        // do something
    }
};

$( window ).resize(function() {
  resizeProctorFeed();
  el = $('.proctor-feed-container');
  elheight = el.height();
  el2 = $('.chat-container');
  el2height = el2.height();
  el2.height(elheight);
});

function resizeProctorFeed() {
  windowwidth = $(window).width();
  heightofproctorcontainer =  (windowwidth - 20 ) * 0.5 * 0.75;
  $('.proctor-feed-container').height(heightofproctorcontainer);
};
