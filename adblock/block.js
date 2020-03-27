<<<<<<< HEAD
firefox.webRequest.onBeforeRequest.addListener(
=======
browser.webRequest.onBeforeRequest.addListener(
>>>>>>> 93e5fbba615f7137013cb888803805b8716cce6e
	function(details) {
		console.log("blocking:", details.url);
		return {cancel: true };
	},
	{urls: blocked_domains},
	["blocking"]
);
