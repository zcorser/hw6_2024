var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	// Turn off autoplay
	video.autoplay = false;
	// Turn off looping
	video.loop = false;

    // Update volume information
    var volumeDisplay = document.getElementById("volume");
    video.volume = 0.5; // Default volume to 50%
    volumeDisplay.innerHTML = video.volume * 100 + '%';

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
	});

    document.getElementById("pause").addEventListener("click", pauseVideo);
	function pauseVideo() {
		console.log("Pause Video");
		video.pause();
	}
