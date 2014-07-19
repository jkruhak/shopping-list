$(document).ready(function() {

	//add #product-name only using 'enter' key
	$('#input-fields').on('keypress', function(event) {
		var inputitem = $('#product').find('#product-name').val();
		var listitem = $('<li>'+inputitem+'</li>');
		if (event.which == '13') {
			$('.product-list').append(listitem); 
			$('#product-name').val('');
		}
	});

	//add #product-quantity+#product-name+#product-price using 'add' button
	$('#input-fields').on('click', 'button', function() {
		//console.log('add button');
		//product-quantity
		var inputquantity = +$('#quantity').find('#product-quantity').val();
		var listquantity = $('<li>'+inputquantity+'</li>');
		$('.quantity-list').append(listquantity);
		$('#product-quantity').val('');
		//product-name
		var inputitem = $('#product').find('#product-name').val();
		var listitem = $('<li>'+inputitem+'</li>');
		$('.product-list').append(listitem); 
		$('#product-name').val('');
		//product-price
		var inputprice = +$('#price').find('#product-price').val();
		var rowtotal = inputprice*inputquantity;
		var listprice = $('<li>'+rowtotal+'</li>');
		$('.price-list').append(listprice);
		$('#product-price').val('');

	});

	//count number of items in list as each added

})