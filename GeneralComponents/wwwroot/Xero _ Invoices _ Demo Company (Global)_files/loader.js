(function analyticsLoader() {

	window.analytics = window.analytics || [];

	// If the real analytics.js is already on the page return.
	if (analytics.initialize) return;

	// If the snippet was invoked already show an error.
	if (analytics.invoked) {
		if (window.console && console.error) {
			console.error('Segment snippet included twice.');
		}
		return;
	}

	// Invoked flag, to make sure the snippet
	// is never invoked twice.
	analytics.invoked = true;
	analytics.factory = factory;
	analytics.load = load;
	analytics.methods = [
	'trackSubmit',
	'trackClick',
	'trackLink',
	'trackForm',
	'pageview',
	'identify',
	'group',
	'track',
	'ready',
	'alias',
	'page',
	'once',
	'off',
	'on'
	];

	// Create a queue to push events, and stub all methods
	analytics.methods.forEach(function(method){
		analytics[method] = analytics[method] || analytics.factory(method);
	});

	function factory(method) {
		return function () {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(method);
			analytics.push(args);
			return analytics;
		};
	};

	function load(src, callback) {
		var script = document.createElement('script');

		script.async = true;
		script.type = 'text/javascript';
		script.src = src;
		script.addEventListener('load', onScriptLoaded, false);

		var firstScript = document.getElementsByTagName('script')[0];

		firstScript.parentNode.insertBefore(script, firstScript);

		function onScriptLoaded(e) {
			if (typeof callback === 'function') {
				callback(e);
			}
		}
	}

}());
