var pages = 13;
var currentpage = 1;
if (document.location.hash) { currentpage = parseInt(document.location.hash.replace('#', '')); }
console.log(currentpage);

var nextpage = currentpage + 1; if (nextpage > pages) { nextpage = pages; }
var prevpage = currentpage - 1; if (prevpage < 1) { prevpage = 1; }
	
var animatingup = false;
var animatingdown = false;
	
$(document).ready(function() {
	$(document).on("click",".main-menu",function(){
		$('.menu-container').slideDown();
		$('.menus li').each(function(){
		$(this).find('img').css({'top':$(this).position().top,'left':$(this).position().left});
		});
	});
	$(document).on("click","a.close-menu",function(){
		$('.menu-container').slideUp();
	});
	resizeDiv();
	$('.menus li a').hover(function(){
		$(this).parent().find('img').addClass('alignmenuli').css({'top':'50%','left':'50%'});
	},function(){
		console.log();
		$(this).parent().find('img').removeClass('alignmenuli').css({'top':$(this).position().top,'left':$(this).position().left});
	})
	
});

window.onresize = function(event) {
	resizeDiv();
	scrolltocurrent();
	var winwidth = $(window).innerWidth(),winheight = $(window).innerHeight();
	$('#section1').css({'height':winwidth*2});	
	$('.left-content,.right-content').css({'width':winwidth,'height':winheight})
}

$(function(){
	viv = 10;
	var winwidth = $(window).innerWidth(),winheight = $(window).innerHeight();
	$('#section1').css({'height':winwidth*2});	
	$('.left-content,.right-content').css({'width':winwidth,'height':winheight});
})
var lastScrollTop = 0;
const debounce = (fn,delay)=>{
let timeoutid;
return function(...args){
if(timeoutid)
{
clearTimeout(timeoutid);
}
  timeoutid = setTimeout(()=>{
  	fn(...args)
  },delay);
}
}  
var x=0,y=0,z=0,z2=0;
if(currentpage==1)
{

	$("html, body").animate({ scrollTop: 1063 },100);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.addEventListener('scroll',debounce(e=>{

var ohmone = parseFloat($('.left-content-parent').css('width'));
var st = $(this).scrollTop();
var bannerwidth =  parseFloat($('.bannertwo').css('width'));
var bannertop =  parseFloat($('.bannertwo').css('top'));
var bannerleft =  parseFloat($('.bannertwo').css('left'));
var bannerpara =  parseFloat($('.para.paraone').css('padding-top'));
var h3clsone =  parseFloat($('.h3-cls.h3-clsone').css('font-size'));
var p1one =  parseFloat($('.p1one').css('font-size'));
var tabhand = parseFloat($('.tablet-imgcls').css('width'));
var tabhandheight = parseFloat($('.tablet-imgcls').css('height'));
var tabhandtop = parseFloat($('.tablet-imgcls').css('top'));
if(pageYOffset > 0 && pageYOffset < 1950)
$('.left-content-parent').stop().css({'width':(($(window).innerWidth()*1.4)-pageYOffset)});

	if(st > lastScrollTop)
	{
	console.log("newwww down:"+currentpage);	
	if(pageYOffset > 1950){
	if(bannerwidth<1891)
	{
	$('.bannertwo').css({'width':bannerwidth+10,'top':bannertop-5,'left':bannerleft-5});
	$('.para.paraone').css({'padding-top':bannerpara-4});
	$('.h3-cls.h3-clsone').css({'font-size':h3clsone+0.5});
	$('.p1one').css({'font-size':p1one+0.25});
	$('.tablet-imgcls').css({'width':tabhand+5,'height':tabhandheight+5,'top':tabhandtop-2});
	}
	}
	if(currentpage==2)
		{


			
				$('.pos-fix').css({'display':'block'});
				$('.sectiontwo').animate({'width':'100%','height':'754px'},1000,function(){
				$('.ctwo-sectionone').addClass('ctwosectionanim');
				$('.group-icons,.lib-toptxt').addClass('block');
				});


		}
		if(currentpage==3)
		{

			 $('.sectiontwo').css({'background-position-x':'100%'});
			 $('.ctwo-sectionone').css({'display':'none'});
			 $('.ctwo-sectiontwo').addClass('ctwosectionanimtwo');
			 	$('.sectiontwo2').css({'display':'block','height':'0px','width':'0px'});
			 	$('.ctwo-sectionone2').removeClass('ctwosectionanim');
		}
		if(currentpage==4)
		{


				$('.sectiontwo').css({'display':'none'});

				$('.sectiontwo2').animate({'width':'100%','height':'754px'},1000,function(){
				$('.ctwo-sectionone2').addClass('ctwosectionanim');
				$('.ctwo-sectionone2 .group-icons,.ctwo-sectionone2 .lib-toptxt').addClass('block');
				});
		}
		if(currentpage==5)
		{

			$('.sectiontwo2').css({'display':'block'});
		    $('.sectiontwo2').css({'background-position-x':'70%'});
		     $('.ctwo-sectionone2').css({'display':'none'});
		    $('.ctwo-sectiontwo2').addClass('ctwosectionanimtwo');

					$('.containerthre').css({'height':$(window).innerHeight()});     
		}
		if(currentpage==6)
		{
			$('.ulone').fadeIn();
			$('.sectiontwo,.sectiontwo2').css({'display':'none'});
				getRandomInt(3000);
		
				
			 		$(".ulone li").each(function(){	
			 		var bounce = new Bounce();			 		
					bounce.scale({
				   	from: { x: 1, y: 1 },
				  	to: { x: 2, y: 2 },
				    easing: "bounce",
				    duration: getRandomInt(3000),
				    delay: 100,
				    stiffness: 1,
				    bounces:15
				   }).applyTo($(this));
				});
 			$('.bottom-div').addClass('bottom-div-block');
		}
		if(currentpage==7)
		{
		$('.section7-fixed').fadeIn();			
			$(".ulone li").css({
				  '-webkit-transform' : 'scale(1)',
				  '-moz-transform'    : 'scale(1)',
				  '-ms-transform'     : 'scale(1)',
				  '-o-transform'      : 'scale(1)',
				  'transform'         : 'scale(1)'
				});
				
			$('.sectiontwo').fadeOut();
			
				
			 	$('.particle-page *').fadeIn(1500);
			 	
			 	$('.ul-img li').hover(function(){
			 		$(this).css('transform', 'scale(1.1)');
			 		$(this).find('span').css({'bottom':'-10px'});
			 	},function(){
			 		$(this).css('transform', 'scale(1)');
			 		$(this).find('span').css({'bottom':'-100px'});
			 	})
		}
		if(currentpage==8)	
		{
			$('.content-centr-abs3').fadeIn();	
			$('.content-centr-abs').fadeOut();			
		}
		if(currentpage==9)	
		{
			$('.section7-fixed').css({'display':'none'});
		
		}
		if(currentpage==10)
		{
			setTimeout(function(){ $('.branding-buttons li:nth-child(1)').addClass('ctwosectionanimfour');},250);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(2)').addClass('ctwosectionanimfour');},450);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(3)').addClass('ctwosectionanimfour');},650);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(4)').addClass('ctwosectionanimfour');},750);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(5)').addClass('ctwosectionanimfour');},1050);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(6)').addClass('ctwosectionanim');},1250);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(7)').addClass('ctwosectionanim');},1450);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(8)').addClass('ctwosectionanim');},1650);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(9)').addClass('ctwosectionanim');},1850);
		 	setTimeout(function(){ $('.branding-buttons li:nth-child(10)').addClass('ctwosectionanim');},2050);
		}

	}
	else
	{
		if(currentpage==1)
		{
			$('.sectiontwo').css({'width':'0px','height':'0px'});
			$('.ctwo-sectionone').removeClass('ctwosectionanim');
		}	
		if(currentpage==2)
		{
			$('.ctwo-sectionone').addClass('ctwosectionanim');
			$('.ctwo-sectiontwo').removeClass('ctwosectionanimtwo');
			$('.sectiontwo').css({'background-position-x':'0%'});
			$('.ctwo-sectionone').css({'display':'block'});				
		}
		if(currentpage==3)
		{		

				$('.sectiontwo2').css({'display':'none'});
				$('.sectiontwo').fadeIn();
		}
		if(currentpage==4)
		{

			$('.sectiontwo2').css({'background-position-x':'0%'});
			$('.ctwo-sectiontwo2').removeClass('ctwosectionanimtwo');
			$('.ctwo-sectionone2').css({'display':'block'});
			$('.ctwo-sectionone2').addClass('ctwosectionanim');
		}	
		if(currentpage==5)
		{
		   $('.sectiontwo2').fadeIn();
		}
		console.log("newwww up:"+currentpage);
	if(currentpage==6)
	{
		$('.section7-fixed').css({'display':'none'});	
		// $('.sectiontwo,.sectiontwo2').css({'display':'none'});
		// 		getRandomInt(3000);

		// 	 $('.containerthre').animate({'height':$(window).innerHeight()},function(){
		// 	 		$(".ulone li").each(function(){	
		// 	 		var bounce = new Bounce();			 		
		// 			bounce.scale({
		// 		   	from: { x: 1, y: 1 },
		// 		  	to: { x: 2, y: 2 },
		// 		    easing: "bounce",
		// 		    duration: getRandomInt(3000),
		// 		    delay: 100,
		// 		    stiffness: 1,
		// 		    bounces:15
		// 		   }).applyTo($(this));
		// 		});
					
			 		
		// 	 });
 	// 		$('.bottom-div').addClass('bottom-div-block');
	}
	if(currentpage==7)	
	{
		$('.content-centr-abs').fadeIn();	
		$('.content-centr-abs3').fadeOut();
	}
	if(currentpage==8)	
	{
		$('.section7-fixed').css({'display':'block'});
	
	}
	if(pageYOffset < 2162){
	if(bannerwidth>1519)
	{
	$('.bannertwo').css({'width':bannerwidth-10,'top':bannertop+5,'left':bannerleft+5});
	$('.para.paraone').css({'padding-top':bannerpara+4});
	$('.h3-cls.h3-clsone').css({'font-size':h3clsone-0.5});
	$('.p1one').css({'font-size':p1one-0.25});
	$('.tablet-imgcls').css({'width':tabhand-5,'height':tabhandheight-5,'top':tabhandtop+2});
	}
	}
	}	
lastScrollTop = st;

	
	if (animatingup==true) {

	 console.log("animating up..."); 
		
	 return; }
	if (animatingdown==true) {
		

		console.log("animating down..."); return; 

	}
	
	nextpage = currentpage + 1; if (nextpage > pages) { nextpage = pages; }
	prevpage = currentpage - 1; if (prevpage < 1) { prevpage = 1; }
		
	console.log("scroll happened, previous page is " + prevpage + ", current page is " + currentpage + ", next page is " + nextpage);

	//console.log($("#page"+(currentpage)).offset().top + " < " + $(window).scrollTop());
	
	//console.log($(window).scrollTop()+$(window).height() + " < " + $("#page"+(nextpage)).offset().top);
	
	if (animatingup == false) {
		if ($(window).scrollTop()+$(window).height()>=$("#section"+(nextpage)).offset().top+50) {
			if (nextpage > currentpage) {
				var p2 = $( "#section"+(nextpage) );
				var pageheight = p2.position().top;
					animatingdown = true;
				$('html, body').animate({ scrollTop: pageheight }, 200, function() { currentpage = nextpage; animatingdown = false; document.location.hash = currentpage;});
				return;
			}
		}
	}
	
	if (animatingdown == false) {
		if ($(window).scrollTop()<=$("#section"+(currentpage)).offset().top-50) {
			if (prevpage < currentpage) {
				var p2 = $( "#section"+(currentpage) );
				var pageheight = p2.position().top-$(window).height();
				animatingup = true;
				$('html, body').animate({ scrollTop: pageheight }, 200, function() { currentpage = prevpage; animatingup = false; document.location.hash = currentpage;});
			}
		}
	}
},17));
function scrolltocurrent() {
	var p2 = $( "#section"+(currentpage));
	var pageheight = p2.position().top;
	$("html, body").animate({ scrollTop: pageheight },100);
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('.section').css({'min-height': vph + 'px'});
	
	
}
