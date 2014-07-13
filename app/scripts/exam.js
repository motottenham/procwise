$(document).ready(function () {
  var proctor = document.querySelector("#proctor-feed");
  var student = document.querySelector("#webcam-feed");
  var mobile = document.querySelector("#mobile-feed");
  startVideo(proctor);
  startVideo(student);
  startVideo(mobile);
  start = new Date();
  duration = 45 * 60000;
  myVar = setInterval(function(){animateUpdate()}, 1000);
})

function animateUpdate() {
    var now = new Date();
    elapsed = now.getTime() - start.getTime();
    timeleft = (duration - elapsed ) / 1000;
    var perc = elapsed / duration * 100;
      if (perc <= 100) {
       progress(perc, $('#progressBar'));
      }
      else {
        clearInterval(myVar);
        $('#progressBar div').css('padding','0');
        $('#progressBar div').css('width','0');
        $('#progressBar div').css('color','black');
        $('#progressBar div').text('');
        $('#progressBar').text('Exam is finished');
      }
}

function startVideo(video) {

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

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    var elwidth = $element.width();
    var newwidth = elwidth - progressBarWidth ;
    // The initial data, in seconds
    timeleft = Math.round((duration - elapsed ) / 1000); 
    // In minutes
    mins = Math.floor(timeleft/60);  
    // The balance of seconds
    secs = timeleft % 60;              
    $element.find('div').animate({ width: newwidth }, 100, 'linear').html(mins + ":" + secs);
};