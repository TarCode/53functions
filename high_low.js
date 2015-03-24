function high_low(arr) {
	var high = null;
	var low = null;

	for (var i = 0; i < arr.length; i++) {
		var elem = arr[i];

		if (low === null || high > elem) {
			low = elem;
		};
		
		if (high === null || high < elem) {
			high = elem;
		};
	};
	return "low = " + low + " , high = " + high;
}
