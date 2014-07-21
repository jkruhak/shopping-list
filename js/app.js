$(document).ready(function() {

	//add #product-name only using 'enter' key
	$('#input-fields').on('keypress', function(event) {
		//product-quantity variables
		var inputquantity = +$('#quantity').find('#product-quantity').val();
		var listquantity = $('<li>'+inputquantity+'</li>');
		//product-name variables
		var inputitem = $('#product').find('#product-name').val();
		var listitem = $('<li>'+inputitem+'</li>');
		//product-price variables
		var inputprice = +$('#price').find('#product-price').val();
		var rowtotal = inputprice*inputquantity;
		var listprice = $('<li>'+rowtotal+'</li>');
		if (event.which == '13') {
			//product-quantity
			$('.quantity-list').append(listquantity);
			$('#product-quantity').val('1');
			//product-name
			$('.product-list').append(listitem); 
			$('#product-name').val('');
			//product-price
			$('.price-list').append(listprice);
			$('#product-price').val('0.00');
		}
	});

	//add #product-quantity+#product-name+#product-price using 'add' button
	$('#input-fields').on('click', 'button', function() {
		//product-quantity
		var inputquantity = +$('#quantity').find('#product-quantity').val();
		var listquantity = $('<li>'+inputquantity+'</li>');
		$('.quantity-list').append(listquantity);
		$('#product-quantity').val('1');
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
		$('#product-price').val('0.00');
	});

	//count number of items in list as each added
	


	//strikethrough when item is clicked
	$('#lists').on('click', 'li', function() {
		$(this).closest('#lists').find('li').toggleClass('gotit');
		//$(this).toggleClass('gotit');
	});

	

})