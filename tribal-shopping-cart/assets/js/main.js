// Global Variables
var basketCount = 3;
var favCount = 2;

function addToBasketItem() {
	basketCount++;
	$('#cart .total-count').html(basketCount);
	$('#cart-list').append('<li>Lorem ipsum<a href="#" class="remove"><span>x</span></a><a href="#" class="fav"><span></span></a></li>');
}

function addToFavourites() {
	favCount++;
	$('#favourites .total-count').html(favCount);
}

function deleteBasketItem() {
	basketCount--;
	$('#cart .total-count').html(basketCount)
}

$(document).ready(function(){
	// Show basket
	$('#open-cart-list').click( function(){
		//$('#cart-list').slideToggle();
	});

	// Add product to cart
	$('#add-product').click( function(){
		addToBasketItem();
	});

	// Add to favourites
	$('#cart-list li .fav').click( function(){
		addToFavourites();
	});	

	// Delete product from cart
	$('#cart-list li .remove').on('click', function(){
		deleteBasketItem();
		$(this).parent().remove();
	});
});