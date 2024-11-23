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
    video.volume = 1.0; // Default volume to 100%
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
	document.getElementById("slower").addEventListener("click", slowDownVideo);
    document.getElementById("faster").addEventListener("click", speedUpVideo);
    document.getElementById("skip").addEventListener("click", skipAhead);
    document.getElementById("mute").addEventListener("click", toggleMute);
    document.getElementById("slider").addEventListener("input", changeVolume);
    document.getElementById("vintage").addEventListener("click", applyOldSchool);
    document.getElementById("orig").addEventListener("click", removeOldSchool);



function slowDownVideo() {
    console.log("Slow Down Video");
    video.playbackRate *= 0.9;
    console.log("New speed:", video.playbackRate);
}

function speedUpVideo() {
    console.log("Speed Up Video");
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate);
}

function skipAhead() {
    console.log("Skip Ahead");
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log("Current time:", video.currentTime);
}

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

function changeVolume() {
    video.volume = this.value / 100;
    updateVolumeInfo();
    console.log("Volume:", video.volume);
}

function updateVolumeInfo() {
    var volumeDisplay = document.getElementById("volume");
    volumeDisplay.innerHTML = (video.volume * 100) + '%';
}

function applyOldSchool() {
    video.classList.add("oldSchool");
}

function removeOldSchool() {
    video.classList.remove("oldSchool");
}