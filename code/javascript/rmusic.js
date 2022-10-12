
function playPause1() {
    console.log("test")
     var myVideo = document.getElementById('firstVid');
     var checkBox1 = document.getElementById('fingerstylecheck');
     if (myVideo.paused && checkBox1.checked==true)
         myVideo.play();
     else
         myVideo.pause();
 }
 
 function playPause2() {
     var myVideo2 = document.getElementById('secondVid');
     var checkBox2 = document.getElementById('drumcheck');
     if (myVideo2.paused && checkBox2.checked==true)
         myVideo2.play();
     else
         myVideo2.pause();
 }

 function playPause3() {
    var myVideo2 = document.getElementById('thirdVid');
    var checkBox3 = document.getElementById('chordscheck');
    if (myVideo2.paused && checkBox3.checked==true)
        myVideo2.play();
    else
        myVideo2.pause();
}
 
function playPause4() {
    var myVideo2 = document.getElementById('fourthVid');
    var checkBox4 = document.getElementById('stringcheck');
    if (myVideo2.paused && checkBox4.checked==true)
        myVideo2.play();
    else
        myVideo2.pause();
}
 
function playPause5() {
    var myVideo2 = document.getElementById('fifthVid');
    var checkBox5 = document.getElementById('vocalscheck');
    if (myVideo2.paused && checkBox5.checked==true)
        myVideo2.play();
    else
        myVideo2.pause();
}
