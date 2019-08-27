<!-- hide script from old browsers

var xmlhttp;
function loadDatabase(url, cfunc){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=cfunc;  
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}


/*
alerts user of registration status and empties form elements
*/
function registration(resp){
	var x = document.newUser;
	x.elements[0].value = "";
	x.elements[1].value = "";
	x.elements[2].value = "";
	alert(resp);                
}

/*
adds elements from New User form to database of users
*/
function addUser(){

	var x = document.newUser;
	
	var emaili = x.elements[0].value;
	var usernamei = x.elements[1].value;
	var pwi = x.elements[2].value;
	
	var fArray = new Array();
	fArray.push("email="+emaili);
	fArray.push("username="+usernamei);
	fArray.push("pw="+pwi);
	var elemString = fArray.join("&");	
	

	loadDatabase("addUser.php?" + elemString, function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var resp = xmlhttp.responseText;
			registration(resp);
			}
		});

	
}

function userLogin(){

	var x = document.login;
	
	var usernamei = x.elements[0].value;
	var pwi = x.elements[1].value;

	var fArray = new Array();
	fArray.push("username="+usernamei);
	fArray.push("pw="+pwi);
	var elemString = fArray.join("&");	
	

	loadDatabase("loginUser.php?" + elemString, function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var resp = xmlhttp.responseText;
			x.elements[0].value = "";
			x.elements[1].value = "";
			
			if(resp === "Wrong Username or Password"){
				alert(resp);
			}
			else{
				
				setCurrentUser(resp);
				
			}
		}
	});

	
	
}

function setCurrentUser(cid){

	var q = "cid="+cid;

	loadDatabase("setUser.php?" + q, function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			window.location = "products.html";
		}
	});






}

function loginAdmin(){



	var x = document.adminLogin;
	
	var usernamei = x.elements[0].value;
	var pwi = x.elements[1].value;

	var fArray = new Array();
	fArray.push("username="+usernamei);
	fArray.push("pw="+pwi);
	var elemString = fArray.join("&");	
	

	loadDatabase("loginAdmin.php?" + elemString, function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var resp = xmlhttp.responseText;
			x.elements[0].value = "";
			x.elements[1].value = "";
			
			if(resp === "Wrong Username or Password"){
				alert(resp);
			}
			else{
				
				window.location = "admin.html";
				
			}
		}
	});
	
	
}


// stop hiding -->
