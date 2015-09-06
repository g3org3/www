function main() {
	
	$('.navbar-default').addClass('navbar-default-big');
	$('.navbar-brand').addClass('navbar-brand-big');
	$('.navbar-nav').addClass('navbar-nav-big');

	var off 	= false;
	var desoff 	= false;
	var time 	= 300;

	$(document).scroll(function(){
		var height = $(window).height();
		var scrollTop = $(window).scrollTop();
		// console.log(off, desoff)
		if(scrollTop>195){
			if(!off) {
				// console.log("paso, off")
				off = true;
				desoff = false;
				$('.navbar-default').animate({
					height: '50px'
				}, time);//+300);

				$('.navbar-brand-big img').animate({
					height: '100px',
					top: '-38px'
				}, time);//);

				$('.navbar-nav-big li a').animate({
					'font-size': '20px',
					'line-height': '20px'
				}, time);//+200);
			}
		} else {
			if(!desoff) {
				// console.log("paso, deoff")
				desoff = true;
				off = false;

				$('.navbar-default').animate({
					height: '100px'
				}, time);

				$('.navbar-brand-big img').animate({
					height: '200px',
					top: '-65px'
				}, time+200);

				$('.navbar-nav-big li a').animate({
					'font-size': '23px',
					'line-height': '70px'
				}, time+350);
			}
		}
	})
}
