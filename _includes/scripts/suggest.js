//
// Suggest (@mentions)
// --------------------------------------------------

$(document).ready(function(){
	$('[data-suggest]').each(function(){
		var options = eval('('+$(this).data('suggest-config')+')');
		var data = $(this).data('suggest-data');
		if ( options ) {
			$(this).suggest(options);
		} else if ( data ) {
			var data = $(this).data('suggest-data');
			var start = $(this).data('suggest-start');
			var map = $(this).data('suggest-map');
			var config = {};
			if ( data ) { config.data = eval('('+data+')'); }
			if ( map ) { config.map = function(item){return eval('('+map+')') }; }
			$(this).suggest(start,config);
		} else if ( window.suggestions ) {
			var id = $(this).attr('id');
			$(this).suggest(window.suggestions[id]);
		}
	});
});