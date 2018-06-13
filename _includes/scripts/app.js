$('[data-toggle]').on('click',function(){
	$($(this).attr('data-toggle')).toggleClass('in');
});

$('.menu a').on('click',function(e){
	switch ( true ) {
		case ( $(this).hasClass('menu-tree') ) :
			$(this).closest('li').siblings().children('a.menu-tree').removeClass('active');
			$(this).toggleClass('active');
			break;
		case ( $(this).hasClass('menu-node') || $(this).hasClass('menu-link') ) :
			$('.menu-node, .menu-link').removeClass('active');
			$(this).addClass('active');
			$('.app-menu').removeClass('in');
			//console.log(e.target.href)
			//console.log(window.location.href)
			if ( window.location.href.replace(e.target.href,'') == '/' ) {
				return false;
			}
			break;
	}
});

$('[data-search]').on('keyup focus blur',function(){
	var val = $(this).val();
	var searching = ( val || $(this).is(':focus') );
	var selector_search = '[data-search-close], [data-search-content]';
	var selector_results = '[data-search-results]';
	var selector_content = '[data-content]';
	$( searching ? selector_search : selector_content ).removeAttr('hidden');
	$( !searching ? selector_search : selector_content ).attr('hidden',true);
	if ( val ) { $(selector_results).removeAttr('hidden'); } else { $(selector_results).attr('hidden',true); }
	$('.menu-node').toggleClass('not-active',(searching?true:false));
	$('[data-search-title]').html(val);
	$('[data-search-count]').html(val?5:0);
});

$('[data-search-close]').on('click',function(){
	$('[data-search]').val('').trigger('keyup');
});