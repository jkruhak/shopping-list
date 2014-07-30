$(document).ready(function() {

	function addToQuantity() {
		var inputquantity = +$('#productQuantity').val();
		//$('#productQuantity').val('5');
		return inputquantity;
	}

	function addToItem() {
		var inputitem = $('#productName').val();
		$('#productName').val(' ');
		return inputitem;
	}

	function addToPrice() {
		var inputprice = +$('#productPrice').val();
		$('#productPrice').val('0.00');
		return inputprice;
	}

	function itemsAddedToList() {
		var quantityAdd = addToQuantity();
		var itemAdd = addToItem();
		var priceAdd = addToPrice();
		var rowtotal = quantityAdd*priceAdd;
		var total = rowtotal.toFixed(2);

		$('#productList').append('<li>'+quantityAdd+ "x " + itemAdd + "&#32;" + " = " + " $" + total+'</li>');
	}
	
	//quantity total
/*	function quantityTotal() {
		
		var total = 0;
		$('#productQuantity').each(function() {
//		$('#quantityList li').each(function() {
			total += parseFloat($(this).val());
		});

		$('#listSum').val(total);
	}

	//add to list total using 'add' button
	$('#listTotalTitle').on('click', '#itemCount', quantityTotal);
*/
	//add to list using 'add' button
	$('#inputFields').on('click', '#addButton', itemsAddedToList);

	//add to list using 'enter' key
	$('#inputFields').on('keypress', function(event) {
		if (event.which == '13') {
			itemsAddedToList();
		}
	});

	//remove from list on double click
	$('#productList').on('dblclick', 'li', function() {
		$(this).remove();
	});

	//cross out from list on click
	$('#productList').on('click', 'li', function() {
		$(this).toggleClass('gotit');
	});

	//Instructions in header
	$('header').on('mouseover', function() {
		$('#title').hide();
		$('#instructions').show();
	});

	$('header').on('mouseleave', function() {
		$('#instructions').hide();
		$('#title').show();
	});

});