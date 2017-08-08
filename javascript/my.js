	
function myfunction()
{
	var now = new Date();

	var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	// var days = ['Sunday', 'Monday'];
	var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');


	var date = ( (now.getDate() < 10) ? "0" : "" ) + now.getDate();
	console.log(date);
	return;

	var time = setInterval( (now.getTime(), 1000) ? "0" : "" )+ now.getTime();

	function fourdigits(number)	{
		return (number < 1000) ? number + 1900 : number;
	}

	today =  days[now.getDay()] + ", " + months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear())) ;
	// time + "," +

	document.getElementById("demo").innerHTML = today;
	}



