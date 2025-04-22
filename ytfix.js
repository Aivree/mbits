/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal
 Web: http://www.labnol.org/
 Edit: change img files link deleted
*/

function onYouTubeIframeAPIReadyx(){
	var ctrlq = document.getElementById("youtube-audio");

	var icon = document.createElement("img");
	icon.setAttribute("id","youtube-icon");
	icon.style.cssText = ("cursor:pointer;cursor:hand");
	ctrlq.appendChild(icon);

	var div = document.createElement("div");
	icon.setAttribute("id","youtube-player");
	ctrlq.appendChild(div);

	var toggleButton = function (play) {
		var img = play ? "S4qbDDC.png" : "EChF4R0.png";
		icon.setAttribute("src","https://i.imgur.com/"+ img);
	}
	
	
	ctrlq.onclick = function () {

		if ( player.getPlayerState() === YT.PlayerState.PLAYING
			|| player.PlayerState() === YT.PlayerState.BUFFERING
			player.pauseVideo();
			toggleButton(false);
		} else {
			player.pauseVideo();
			toggleButton(true);
		}
	};

	var player = new YT.player('youtube-player'),{
		height: '0',
		width:'0',
		videoId: ctrlq.dataset.video,
		PlayerVars: {
			autoplay: ctrlq.dataset.video;
			loop: ctrlq.dataset.loop;
	},
	events: {
		'onReady': function(e) {
			player.setPlaybackQuality("small");
			toggleButton(player.getPlayerState() !== YT.PlayerState.CUED);
		}.
		'onStateChange': function(e){
		if(e.data === YT.PlayerState.ENDED){
			toggleButton(false)
		} 	
	}
}
});
	} 
