// Global Variables
var basketCount = 3;
var favCount = 2;

function addToBasketItem() {
	// Product var
	var productName = $('#product-name').html();
	// Update Basket count
	basketCount++; 
	// Get product name from ID
	$('#cart .total-count').html(basketCount);
	// Add product to cart
	$('#cart-list').append('<li>' + productName + '<a href="#" class="remove"><span>x</span></a><a href="#" class="fav"><span></span></a></li>');
}

function addToFavourites() {
	favCount++;
	$('#favourites .total-count').html(favCount);
}

function deleteBasketItem() {
	basketCount--;
	$('#cart .total-count').html(basketCount);
}

$(document).ready(function(){
	// Show basket
	$('#open-cart-list').click( function(){
		$('#cart-list').stop().slideToggle();
	});

	// Add product to cart
	$('#add-product').click( function(){
		addToBasketItem();
	});

	// Add to Favourites
	$('#cart-list').on('click', '.fav', function(e){
		e.preventDefault();
		addToFavourites();		
	});

	// Delete current and newly added products from cart
	$('#cart-list').on('click', '.remove', function(e){
		e.preventDefault();
		deleteBasketItem();
		$(this).parent().remove();
	});
});