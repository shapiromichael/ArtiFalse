'use strict';

const ArtiFalse = {
	init() {
		$('.btn-disable-ads').on('click', () => {
			chrome.tabs.query({'active': true}, function(tabs) {
				let url = tabs[0].url;

				if (url.indexOf('artipreview') === -1) {
					if (url.indexOf('?') > -1) {
						url = url + '&artipreview=false';
					} else {
						url = url + '?artipreview=false';
					}
				}

				// Change the URL
				chrome.tabs.update(tabs[0].id, { url });
			});
		})
	}
};

$(ArtiFalse.init);
