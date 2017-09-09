var ajaxLoader = {
	overlay: "<div id=\"loaderOverlay\"></div>",
	loading: "<div id=\"loaderLoading\"></div>",
	message: "<div id=\"loaderMessage\"></div>",
	started: function() {
		$("body").append(ajaxLoader.overlay).append(ajaxLoader.loading);
		var viewportHeight;
		if (document.compatMode === 'BackCompat') {
			viewportHeight = document.body.clientHeight;
		} else {
			viewportHeight = document.documentElement.clientHeight;
		}
		$("#loaderLoading").css("top",viewportHeight/2).css("left",($("body").width()-100)/2);
	},
	finished: function(message) {
		$("body").find("#loaderOverlay, #loaderLoading").remove();
		$("body").append(ajaxLoader.message);
		$("#loaderMessage").css("left",($("body").width()-226)/2);
		$("#loaderMessage").html(message);
		$("#loaderMessage").animate({
			opacity: 1
		}, 500, function(){
			setTimeout(function(){
				$("#loaderMessage").animate({
					opacity: 0
				}, 500, function(){
					$("#loaderMessage").remove();
				});
			}, 3000);
		});
	},
	
};