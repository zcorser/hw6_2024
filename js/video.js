var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	// Turn off autoplay
	video.autoplay = false;
	console.log("Autoplay is off");
	// Turn off looping
	video.loop = false;
	console.log("Looping is off");

    // Update volume information
    var volumeDisplay = document.getElementById("volume");
    video.volume = 0.5; // Default volume to 50%
    volumeDisplay.innerHTML = video.volume * 100 + '%';
	
});
// Play the video
document.querySelector("#play").addEventListener("click", playVideo); 
	function playVideo() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
	}
// Pause the video
document.getElementById("pause").addEventListener("click", pauseVideo);
	function pauseVideo() {
		console.log("Pause Video");
		video.pause();
	}
// Slow down the video by 10%
document.getElementById("slower").addEventListener("click", slowDownVideo);
	function slowDownVideo() {
    	console.log("Slow Down Video");
    	video.playbackRate *= 0.9;
    	console.log("New speed:", video.playbackRate);
	}
// Speed up the video by 10%
    document.getElementById("faster").addEventListener("click", speedUpVideo);
	function speedUpVideo() {
		console.log("Speed Up Video");
		video.playbackRate /= 0.9;
		console.log("New speed:", video.playbackRate);
	}
// Skip ahead by 10 seconds
    document.getElementById("skip").addEventListener("click", skipAhead);
	function skipAhead() {
		console.log("Skip Ahead");
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("Current time:", video.currentTime);
	}
// Mute the video (and unmute it)
    document.getElementById("mute").addEventListener("click", toggleMute);
	function toggleMute() {
		if (video.muted) {
			video.muted = false;
			this.innerHTML = "Mute";
		} else {
			video.muted = true;
			this.innerHTML = "Unmute";
		}
		console.log("Mute status:", video.muted);
	}
// Change the volume and update volume info again
    document.getElementById("slider").addEventListener("input", changeVolume);
	function changeVolume() {
		video.volume = this.value / 100;
		updateVolumeInfo();
		console.log("Volume:", video.volume);
	}
	function updateVolumeInfo() {
		var volumeDisplay = document.getElementById("volume");
		volumeDisplay.innerHTML = (video.volume * 100) + '%';
	}
// Change the video styling to old school
    document.getElementById("vintage").addEventListener("click", applyOldSchool);
	function applyOldSchool() {
		video.classList.add("oldSchool");
	}
// Change the video styling to normal
    document.getElementById("orig").addEventListener("click", removeOldSchool);
	function removeOldSchool() {
		video.classList.remove("oldSchool");
	}
