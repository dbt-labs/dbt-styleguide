
//
// Collapse
// --------------------------------------------------

$(document).on('click','[data-toggle="collapse"]',function(e) {
	e.preventDefault();
});

//
// Tooltips
// --------------------------------------------------

if ( !is_touch() ) {
	$(document).tooltip({
		selector: '[data-toggle="tooltip"]',
		placement: function(tip,element){
			return ( $(element).attr('data-placement') ) ? $(element).attr('data-placement') : 'auto';
		},
		container: 'body'
	});
}

//
// Popover
// --------------------------------------------------
$(document).ready(function(){
	$('[data-toggle=popover]').popover({container: 'body', html: true});
})

//
// Carousels
// --------------------------------------------------
$(document).ready(function(){
	$('[data-carousel]').carousel();
});
