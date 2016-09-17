var navBar = '<ul class="clearfix newNav"style="display:none"><li id="homeres">Home</li><li id="aboutres">About</li><li id="portfoliores">Portfolio</li><li id="contactres">Contact</li></ul>'
var arrow = $('#response img');
$('.header').append(navBar);
arrow[0].addEventListener('mouseover',function(){
	 $('.newNav').slideDown(500);
});
$('.newNav')[0].addEventListener('mouseleave',function(){
	 $('.newNav').slideUp(1000);
});
window.addEventListener('resize',function(){
	$('.newNav').hide();
})







$('#homeres')[0].addEventListener('click',function(){
	$('#home').trigger('click');
});
$('#aboutres')[0].addEventListener('click',function(){
	$('#about').trigger('click');
});
$('#portfoliores')[0].addEventListener('click',function(){
	$('#portfolio').trigger('click');
});
$('#contactres')[0].addEventListener('click',function(){
	$('#contact').trigger('click');
});





