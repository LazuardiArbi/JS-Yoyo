var index = 0;

autoSlide();


// Function click square
$('.sqr').on('click', function(){
	let id = $(this).attr('id');
	let slides = id.substring(id.length-1);

	showSlidesIndex(slides);
});

function showSlidesIndex(n){
	var i;
	var imageSlide = $('.slide-img'); // get all image_parent jquery object
	var sqr = $('.sqr');

	if(n > imageSlide.length) index = 1; // More than total image, back to 1
	else if(n < 1) index = imageSlide.length; // Below 1 back to last image
	else index = n;

	for(i=0; i< imageSlide.length; i++){
		imageSlide.eq(i).hide(); // hide all image_parent_child
		sqr.eq(i).removeClass('active');
	}

	imageSlide.eq(index-1).fadeIn(); // Show by index-1 (index start from 0)
	sqr.eq(index-1).addClass('active');
}


function autoSlide(){
	index++;
	showSlidesIndex(index);
	setTimeout(autoSlide, 3000);
}