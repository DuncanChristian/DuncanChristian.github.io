JavaScript Document


(function() {
	var book = {
		name: 'Sirens',
		price: 15,
		discount: 25,
		offerPrice: function() {
			var offerRate = this.price * ((100 - this.discount)/100);
			return offerRate;
		}
	};
	
	var bookName, bookPrice, specialPrice;
	
	bookName = document.getElementById('bookName');
	bookPrice = document.getElementById('bookPrice');
	specialPrice = document.getElementById('specialPrice');
	
	bookName.textContent = book.name;
	bookPrice.textContent = '$' + book.price.toFixed(2);
	specialPrice.textContent = '$' + book.offerPrice;
	
	var expiryMsg;
	var today;
	var elEnds;
	
	function offerExpires(today) {
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		
		dayNames = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getmonth()];
		year = weekFromToday.getFullYear();
		
		expiryMsg = 'Offer expires next ';
		expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}
	
	today = new Date();
	elEnds = document.getElementById('offerEnds');
	elEnds.innerHTML = offerExpires(today);
}());