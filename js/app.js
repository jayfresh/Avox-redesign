$.fn.equalize = function() {
	var $collection = this,
		heights = [],
		maxHeight;
	$collection.each(function(i, elem) {
		heights.push($(elem).height());
	});
	maxHeight = Math.max.apply(Math, heights);
	$collection.height(maxHeight);
	return this;
};

$(document).ready(function() {
		$('.equalise1').equalize();
		return false;
});