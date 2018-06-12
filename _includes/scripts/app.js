$('[data-toggle]').on('click',function(){
	$($(this).attr('data-toggle')).toggleClass('in');
});

$('.menu a').on('click',function(){
	switch ( true ) {
		case ( $(this).hasClass('menu-tree') ) :
			$(this).closest('li').siblings().children('a.menu-tree').removeClass('active');
			$(this).toggleClass('active');
			break;
		case ( $(this).hasClass('menu-node') ) :
			$('.menu-node').removeClass('active');
			$(this).addClass('active');
			$('.app-menu').removeClass('in');
			break;
	}
});