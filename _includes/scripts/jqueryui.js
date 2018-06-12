//
// Datepicker
// --------------------------------------------------

function activate_datepicker(element,action) {
	element.datepicker({
		beforeShow: function (input,inst) { var timer = setTimeout( function(){ $('#ui-datepicker-div').addClass('ui-widget-active'); } , 1 ); },
		onClose: function (input,inst) { $('#ui-datepicker-div').removeClass('ui-widget-active'); }
	});
	element.datepicker('show');
}

$(document).on('focus','.form-control[data-toggle="datepicker"]', function(){
	activate_datepicker($(this));
});

$(document).on('click','a[data-toggle="datepicker"]', function(e){
	var target = $($(this).attr('data-target'));
	activate_datepicker(target,'show');
	e.preventDefault();
});

//
// Autocomplete
// --------------------------------------------------

$.extend($.ui.autocomplete.prototype.options, {
	open: function(event, ui) {
		$(this).autocomplete("widget").css({
			"width": ($(this).outerWidth() + "px")
		});
	}
});

$(document).ready(function(){
	$('[data-toggle="autocomplete"]').each(function(){
		var source = $(this).data('autocomplete-source');
		if ( source ) {
			$(this).autocomplete({ source: eval('('+source+')') });
		}
	});
});