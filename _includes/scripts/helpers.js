// ------------------------------------ ASYNC ------------------------------------

function async(u,c){var d=document,t='script',o=d.createElement(t),s=d.getElementsByTagName(t)[0];o.src=u;if(c){o.addEventListener('load',function(e){c(null,e);},false);}s.parentNode.insertBefore(o,s);};

// ------------------------------------ COOKIES ------------------------------------
function set_cookie(name,value,days) { var d = new Date(); d.setTime(d.getTime() + ((days?days:60)*24*60*60*1000)); var expires = "expires="+ d.toUTCString(); document.cookie = name + "=" + value + ";" + expires + ";path=/"; }
function get_cookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for(var i = 0; i <ca.length; i++) { var c = ca[i]; while (c.charAt(0)==' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length,c.length); } } return ""; }
function get_params() { if ( window.location.href.indexOf('?') == -1 ) { return []; } var vars = [], hash; var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); for(var i = 0; i < hashes.length; i++) { hash = hashes[i].split('='); vars[hash[0]] = hash[1]; } return vars; }
function get_param(name) { var params = get_params(); return ( params[name] ) ? params[name] : false; }

// ------------------------------------ CLASSES ------------------------------------
function is_touch(){ return ( 'ontouchstart' in window ); }
$(document).on('ready',function(){ $('html').addClass('ready'); });
$(window).on('load',function(){ $('html').addClass('loaded'); });
$('html').toggleClass('click',!is_touch());
$('html').toggleClass('touch',is_touch());
function updateRatio(){
	var portrait = ( $(window).height() > $(window).width() );
	$('html').toggleClass('portrait',portrait);
	$('html').toggleClass('landscape',!portrait);
}
$(window).resize(updateRatio);
updateRatio();


// ------------------------------------ SHOWHIDE ------------------------------------
$(document).on('click','[data-toggle="slide"]',function(){ var targets = $($(this).attr('data-target')); targets.each(function(){ if ( $(this).is(':visible') ) { $(this).hide(); } else { $(this).removeClass('hidden').removeAttr('hidden').show(); } }); return false; });

// ------------------------------------ SCROLLING ------------------------------------
var prevscroll = 0;
function updateScroll(){
	var nextscroll = $(document).scrollTop()
	var winmiddle = nextscroll + $(window).height()/2;
	$('html').toggleClass('page-scrolling',(nextscroll!=0));
	$('html').toggleClass('page-scrolling-down',(nextscroll!=0&&nextscroll>prevscroll));
	$('html').toggleClass('page-scrolling-up',(nextscroll!=0&&nextscroll<prevscroll));
	$('.layer').each(function(){
		var top = $(this).offset().top,
			bottom = top + $(this).outerHeight(),
			middle = ( top + bottom ) / 2,
			offset = winmiddle - middle,
			layer = $(this).data('layer') ? Number($(this).data('layer')) : 0;
		$(this).css('top',(offset*layer*.1));
	});
	prevscroll = nextscroll;
}
$(window).scroll(updateScroll);
$(window).resize(updateScroll);
$(document).ready(updateScroll);

// ------------------------------------ SHUFFLE ------------------------------------
(function($){$.fn.shuffle = function() {var allElems = this.get(),getRandom = function(max) {return Math.floor(Math.random() * max);},shuffled = $.map(allElems, function(){var random = getRandom(allElems.length),randEl = $(allElems[random]).clone(true)[0];allElems.splice(random, 1);return randEl;});this.each(function(i){$(this).replaceWith($(shuffled[i]));});return $(shuffled);};})(jQuery);
$(document).ready(function(){ var shuffle = $('[data-shuffle]'); var types = []; shuffle.each(function(){ var type = $(this).attr('data-shuffle'); if ( types.indexOf(type) == -1 ) { types.push(type) } }); for ( var i = 0 ; i < types.length ; i++ ) { $('[data-shuffle="'+types[i]+'"]').shuffle(); } });

// ------------------------------------ FOCUS SET ------------------------------------
$(document).on('click','[data-focus]',function(){ var el = $(this); var timer = setTimeout(function(){ $(el.attr('data-focus')).find('input:visible:first').focus(); },1); });

// ------------------------------------ BACKGROUNDS ------------------------------------
$(document).ready(function(){ $('[data-bg]').each(function(){ var el = $(this), bg = $(this).data('bg'); if ( bg ) { var timer = setTimeout(function(){ el.css('background-image','url('+bg+')'); },1); } }); });

// ------------------------------------ VIDEO WRAPPER ------------------------------------
$(document).ready(function(){ $('iframe[src*=vimeo], iframe[src*=youtube]').each(function(){ if ( !$(this).closest('.video') ) { $(this).wrap('<div class="video" />'); } }); });

// ------------------------------------ FILES ------------------------------------
$(document).on('change','input[type="file"]',function(){
	var btn = $(this).closest('.btn');
	var files = this.files;
	if ( btn.length ) {
		switch ( files.length ) {
			case 0: btn.removeAttr('data-value'); break;
			case 1: btn.attr('data-value',files[0].name); break;
			default: btn.attr('data-value',files.length); break;
		}
	}
});

// ------------------------------------ ALBUM ------------------------------------
$(document).ready(function(){
	$('.album').each(function(){
		var images = $(this).find('.album-image > img'),
			size = $(this).hasClass('album-small') ? 15 : 25;
		images.each(function(){
			var item = $(this).closest('.album-image'),
			width = $(this).attr('width'),
			height = $(this).attr('height'),
			grow = width / height,
			shrink = 1,
			basis = (grow*size)+'vmin'
			item.css('flex',grow +' '+ shrink +' '+ basis);
		});
		$(this).addClass('album-ready');
	});
});