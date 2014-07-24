$(document).ready(function() {

	function addToQuantity() {
		var inputquantity = +$('#quantity').find('#product-quantity').val();
		var listquantity = $('<li id="itemquantity"> <button id="remove">X</button>' + '&#32;' + '<button id="complete">V</button>' + '&#32;' +inputquantity+'</li>');
		$('#product-quantity').val('1');
		$('.quantity-list').append(listquantity);
	}

	function addToItem() {
		var inputitem = $('#product').find('#product-name').val();
		var listitem = $('<li id="itemname">'+inputitem+'</li>');
		$('#product-name').val('');
		$('.product-list').append(listitem);
	}

	function addToPrice() {
		var inputquantity = +$('#quantity').find('#product-quantity').val();
		var listquantity = $('<li>'+inputquantity+'</li>');
		var inputprice = +$('#price').find('.product-price').val();
		var rowtotal = inputprice*inputquantity;
		var total = rowtotal.toFixed(2);
		var listprice = $('<li id="itemprice">' + '&#36;' +total+'</li>');
		$('.product-price').val('0.00');
		$('.price-list').append(listprice);
	}

	//add to list using 'add' button
	$('#input-fields').on('click', 'button', function() {
		addToQuantity();
		addToItem();
		addToPrice();
	});

	//add to list using 'enter' key
	$('#input-fields').on('keypress', function(event) {
		if (event.which == '13') {
			addToQuantity();
			addToItem();
			addToPrice();
		}
	});

	function removeItem() {
		var quantxed = $('#lists').find('#itemquantity');
		$(quantxed).remove();
		var xed = $('#lists').find('#itemname');
		$(xed).remove();
		var pricexed = $('#lists').find('#itemprice');
		$(pricexed).remove();
	}

	//remove item when 'X' button clicked
	$('#lists').on('click', '#remove', removeItem); 

	//strikethrough when item is clicked
	function completedItem() {
		var quantxed = $('#lists').find('#itemquantity');
		$(quantxed).toggleClass('gotit');
		var xed = $('#lists').find('#itemname');
		$(xed).toggleClass('gotit');
		var pricexed = $('#lists').find('#itemprice');
		$(pricexed).toggleClass('gotit');
	}

	$('#lists').on('click', '#complete', completedItem);

	//count number of items in list as each added
	 	

	//Instructions in header
	$('header').on('mouseover', function() {
		$('#title').hide();
		$('#instructions').show();
	});

	$('header').on('mouseleave', function() {
		$('#instructions').hide();
		$('#title').show();
	});	

})